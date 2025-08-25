// __tests__/beritaController.test.js
const beritaController = require('../controllers/beritaController');
const Berita = require('../models/Berita');
const fs = require('fs');
const path = require('path');

// Mock modul fs dan path
jest.mock('fs');
jest.mock('path');

// Mock model Berita dan methodnya
jest.mock('../models/Berita');

describe('Berita Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {},
            file: null,
            params: {}
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Clear mock history
        jest.clearAllMocks();
    });

    describe('createBerita', () => {
        it('should create berita successfully', async () => {
            req.body = {title: 'judul', description: 'desc', createdAt: '2025-05-28'};
            req.file = {filename: 'image.png'};

            const savedBerita = {
                _id: '123',
                title: 'judul',
                description: 'desc',
                createdAt: '2025-05-28',
                image: '/images/image.png',
                save: jest.fn()
            };

            // Mock constructor and save
            Berita.mockImplementation(() => savedBerita);
            savedBerita.save = jest.fn().mockResolvedValue(savedBerita);

            await beritaController.createBerita(req, res);

            expect(Berita).toHaveBeenCalledWith({
                title: 'judul',
                description: 'desc',
                createdAt: '2025-05-28',
                image: '/images/image.png',
            });
            expect(savedBerita.save).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(savedBerita);
        });

        it('should handle error during create', async () => {
            req.body = {title: 'judul'};
            Berita.mockImplementation(() => ({
                save: jest.fn().mockRejectedValue(new Error('fail save')),
            }));

            await beritaController.createBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({message: 'fail save'}));
        });
    });

    describe('getAllBerita', () => {
        it('should return all berita', async () => {
            const fakeBerita = [{title: 't1'}, {title: 't2'}];
            Berita.find.mockResolvedValue(fakeBerita);

            await beritaController.getAllBerita(req, res);

            expect(Berita.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(fakeBerita);
        });

        it('should handle error on find', async () => {
            Berita.find.mockRejectedValue(new Error('fail find'));

            await beritaController.getAllBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({message: 'fail find'}));
        });
    });

    describe('updateBerita', () => {
        it('should update berita with new image and delete old one', async () => {
            req.params.id = '123';
            req.body = {title: 'judul baru', description: 'desc baru', createdAt: '2025-05-28'};
            req.file = {filename: 'newimage.png'};

            const existingBerita = {
                _id: '123',
                title: 'judul lama',
                description: 'desc lama',
                createdAt: '2020-01-01',
                image: '/images/oldimage.png',
                save: jest.fn().mockResolvedValue(true),
            };

            Berita.findById.mockResolvedValue(existingBerita);
            path.join.mockReturnValue('/mocked/path/oldimage.png');
            fs.unlink.mockImplementation((path, cb) => cb(null));

            await beritaController.updateBerita(req, res);

            expect(Berita.findById).toHaveBeenCalledWith('123');
            expect(fs.unlink).toHaveBeenCalledWith('/mocked/path/oldimage.png', expect.any(Function));
            expect(existingBerita.title).toBe('judul baru');
            expect(existingBerita.description).toBe('desc baru');
            expect(existingBerita.createdAt).toBe('2025-05-28');
            expect(existingBerita.image).toBe('/images/newimage.png');
            expect(existingBerita.save).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(existingBerita);
        });

        it('should return 404 if berita not found', async () => {
            req.params.id = 'notfound';
            Berita.findById.mockResolvedValue(null);

            await beritaController.updateBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({message: 'Berita tidak ditemukan'});
        });

        it('should handle error on update', async () => {
            req.params.id = '123';
            Berita.findById.mockRejectedValue(new Error('fail findById'));

            await beritaController.updateBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({message: 'Gagal memperbarui berita'});
        });
    });

    describe('deleteBerita', () => {
        it('should delete berita and image', async () => {
            req.params.id = '123';
            const berita = {
                _id: '123',
                image: '/images/img.png',
            };
            Berita.findById.mockResolvedValue(berita);
            path.join.mockReturnValue('/mocked/path/img.png');
            fs.unlink.mockImplementation((path, cb) => cb(null));
            Berita.findByIdAndDelete.mockResolvedValue(true);

            await beritaController.deleteBerita(req, res);

            expect(Berita.findById).toHaveBeenCalledWith('123');
            expect(fs.unlink).toHaveBeenCalledWith('/mocked/path/img.png', expect.any(Function));
            expect(Berita.findByIdAndDelete).toHaveBeenCalledWith('123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({message: 'Berita berhasil dihapus'});
        });

        it('should return 404 if berita not found', async () => {
            req.params.id = 'notfound';
            Berita.findById.mockResolvedValue(null);

            await beritaController.deleteBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({message: 'Berita tidak ditemukan'});
        });

        it('should handle error on delete', async () => {
            req.params.id = '123';
            Berita.findById.mockRejectedValue(new Error('fail findById'));

            await beritaController.deleteBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({message: 'Gagal menghapus berita'});
        });
    });

    describe('getPublicBerita', () => {
        it('should return berita', async () => {
            const data = [{title: 't1'}];
            Berita.find.mockResolvedValue(data);

            await beritaController.getPublicBerita(req, res);

            expect(res.json).toHaveBeenCalledWith(data);
        });

        it('should handle error', async () => {
            Berita.find.mockRejectedValue(new Error('fail'));

            await beritaController.getPublicBerita(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({message: 'Gagal mengambil berita publik'});
        });
    });

    describe('getBeritaById', () => {
        it('should return berita by id', async () => {
            const data = {_id: '123', title: 'judul'};
            req.params.id = '123';
            Berita.findById.mockResolvedValue(data);

            await beritaController.getBeritaById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(data);
        });

        it('should return 404 if not found', async () => {
            req.params.id = '404';
            Berita.findById.mockResolvedValue(null);

            await beritaController.getBeritaById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({message: 'Berita tidak ditemukan'});
        });

        it('should handle error', async () => {
            req.params.id = 'error';
            Berita.findById.mockRejectedValue(new Error('fail'));

            await beritaController.getBeritaById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({message: 'Gagal mengambil detail berita'});
        });
    });
});

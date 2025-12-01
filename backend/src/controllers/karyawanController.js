const prisma = require("../lib/prisma");

const getAllEmployees = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany({
            include: {
                achievements: true
            },
            orderBy: { name: "asc" }
        });
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error getAllEmployees:", error.message);
        res.status(500).json({ message: "Gagal mengambil data karyawan", error: error.message });
    }
};

const createEmployee = async (req, res) => {
  try {
    const { achievements, ...employeeData } = req.body;

    const employee = await prisma.employee.create({
      data: {
        ...employeeData,
        joinDate: new Date(employeeData.joinDate),
        achievements: {
          create: achievements?.map(a => ({ achievement: a })) || []
        }
      },
      include: {
        achievements: true
      }
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error("Error createEmployee:", error.message);
    res.status(400).json({ message: "Gagal membuat karyawan baru", error: error.message });
  }
};


const updateEmployee = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { achievements, ...employeeData } = req.body;

        if (employeeData.joinDate) {
            employeeData.joinDate = new Date(employeeData.joinDate);
        }

        const employee = await prisma.employee.update({
            where: { id },
            data: {
                ...employeeData,
                achievements: {
                    deleteMany: {}, 
                    create: achievements?.map(a => ({ achievement: a })) || []
                }
            },
            include: {
                achievements: true
            }
        });

        res.status(200).json(employee);
    } catch (error) {
        console.error("Error updateEmployee:", error.message);
        res.status(400).json({ message: "Gagal memperbarui data karyawan", error: error.message });
    }
};

// DELETE employee
const deleteEmployee = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.$transaction([
            
            prisma.employeeAchievement.deleteMany({
                where: { employeeId: id }
            }),
            prisma.employee.delete({
                where: { id }
            })
        ]);

        res.status(200).json({ message: "Karyawan berhasil dihapus" });
    } catch (error) {
        console.error("Error deleteEmployee:", error.message);
        if (error.code === 'P2003') {
             res.status(400).json({ message: "Gagal menghapus: Karyawan masih memiliki data terkait.", error: error.message });
        } else {
             res.status(500).json({ message: "Gagal menghapus karyawan", error: error.message });
        }
    }
};

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
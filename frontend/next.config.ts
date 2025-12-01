import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5001',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

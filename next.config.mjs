import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'eng.kku.ac.th',
            'raw.githubusercontent.com'
        ]
    }
};

export default nextConfig;

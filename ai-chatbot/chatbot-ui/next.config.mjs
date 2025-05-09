/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: `/${process.env.NEXT_PUBLIC_UI_PATH}`,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/datawire/blackbird-demos/**'
            }
        ]
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {

    runtime:'edge',
    unstable_allowDynamic:[
        '/lib/utilities.js',
        'node_modules/funciton-bind/**'
    ]
};

export default nextConfig;

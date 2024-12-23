import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudCode Hosting - Java & Frontend Apps Made Simple</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className="bg-gray-50 font-poppins">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Simple Cloud Hosting for Developers
            </h1>
            <p className="text-xl mb-8">
              Deploy your Java, React, Angular, or Vue applications with just a
              few clicks
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Start Free Trial
            </button>
          </div>
        </header>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-black">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Lightning Fast Speed
                </h3>
                <p className="text-gray-600">
                  Optimized servers ensuring your applications run at peak
                  performance
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Free SSL Certificates
                </h3>
                <p className="text-gray-600">
                  Automatic SSL installation and renewal for secure hosting
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  24/7 Expert Support
                </h3>
                <p className="text-gray-600">
                  Round-the-clock technical assistance whenever you need it
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-black">
              Java Application Hosting
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Upload JAR File
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple drag-and-drop deployment for your JAR files
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500">
                    Drag your JAR file here or click to upload
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  GitHub Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatic deployment with GitHub integration
                </p>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition w-full">
                  Connect with GitHub
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-black">
              Frontend Application Hosting
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Deploy Build Folder
                </h3>
                <p className="text-gray-600 mb-4">
                  Upload your React, Angular, or Vue build folder
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500">
                    Drag your build/dist folder here
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-black">
                  GitHub Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatic builds from your repository
                </p>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition w-full">
                  Connect with GitHub
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-black mb-16">
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-black">Basic</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for personal projects
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">€2.49</span>
                    <span className="text-gray-600">/mo*</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    For 12 month term
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      10 GB Storage
                    </li>
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      100 Concurrent Visitors
                    </li>
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Free SSL Certificate
                    </li>
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-600">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    Premium
                  </h3>
                  <p className="text-gray-600 mb-6">For growing applications</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">€4.99</span>
                    <span className="text-gray-600 text-black">/mo*</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    For 12 month term
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      50 GB Storage
                    </li>
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      500 Concurrent Visitors
                    </li>
                    <li className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Priority Support
                    </li>
                  </ul>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 CloudCode Hosting. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </>
  );
}

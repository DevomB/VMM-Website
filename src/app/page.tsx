import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="bg-blue-100 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Empowering Health in Kenya Through Technology
        </h1>
        <p className="text-lg mb-8">
          Providing accessible telemedicine services and secure patient data
          management for communities in need.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/services" className="bg-teal-600 text-white px-6 py-2 rounded">
            Get Started
          </Link>
          <Link href="/donate" className="bg-red-600 text-white px-6 py-2 rounded">
            Donate
          </Link>
        </div>
      </header>

      {/* About Us Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">
          Our mission is to improve healthcare access in Kenya through cutting-edge telemedicine
          solutions, allowing patients to receive timely medical attention no matter where they are.
        </p>
      </section>

      {/* Services Section */}
      <section className="my-16 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Telemedicine Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white shadow">
            <h3 className="font-bold">Remote Consultations</h3>
            <p>Talk to doctors from anywhere in Kenya.</p>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="font-bold">EMR Storage</h3>
            <p>Secure electronic medical record management.</p>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="font-bold">Follow-Up Care</h3>
            <p>Seamless prescription delivery and follow-up care.</p>
          </div>
          <div className="p-4 bg-white shadow">
            <h3 className="font-bold">Health Education</h3>
            <p>Raising awareness on critical health issues.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-4 text-center">How Our Platform Works</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <h3 className="font-bold text-xl">Step 1</h3>
            <p>Register or Sign in to the platform</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl">Step 2</h3>
            <p>Schedule a virtual consultation</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl">Step 3</h3>
            <p>Receive your diagnosis and treatment plan</p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="my-16 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Success Stories</h2>
        <p className="text-center max-w-2xl mx-auto">
          "Thanks to this platform, I received care for my chronic illness from a doctor hundreds of
          miles away."
        </p>
      </section>
    </div>
  );
}

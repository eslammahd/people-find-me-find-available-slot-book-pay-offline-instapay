import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-light to-white">
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-primary mx-auto flex items-center justify-center mb-6">
            <span className="text-white text-3xl font-bold">SE</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Saad El Mahdy</h1>
          <p className="text-lg text-primary font-medium mb-4">Licensed Therapist & Psychologist</p>
          <p className="text-gray-600 max-w-xl mx-auto">
            Welcome. I offer a safe, confidential space to explore your thoughts and feelings.
            Book a session below — I look forward to meeting you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-md"
          >
            Book a Session
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl mb-3">📅</div>
            <h3 className="font-semibold text-gray-900 mb-1">View Available Slots</h3>
            <p className="text-sm text-gray-500">Browse open appointment times and pick what works for you.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl mb-3">📝</div>
            <h3 className="font-semibold text-gray-900 mb-1">Book Instantly</h3>
            <p className="text-sm text-gray-500">Fill in your details and reserve your spot in seconds.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-2xl mb-3">💳</div>
            <h3 className="font-semibold text-gray-900 mb-1">Pay Offline</h3>
            <p className="text-sm text-gray-500">Settle via InstaPay or Vodafone Cash — simple and secure.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

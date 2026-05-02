import type { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("This matches the user request for no backend logic!");
  };

  return (
    <section id="contact" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-text-light dark:text-primary-text-dark mb-12 flex items-center justify-center">
            <span className="text-primary mr-2">05.</span> Contact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-bold text-primary-text-light dark:text-primary-text-dark mb-4">Get In Touch</h3>
                <p className="text-secondary-text-light dark:text-secondary-text-dark mb-8">
                    I'm currently looking for new opportunities, whether interstate or remote. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="space-y-4">
                    <a href="mailto:hello@example.com" className="flex items-center text-primary hover:underline">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        hello@example.com
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-text-light dark:text-secondary-text-dark mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" required></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </section>
  );
}

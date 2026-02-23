
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsOfService() {
    return (
       <>
    <Navbar/>
    <section className="grid-bg">
      <main className="max-w-4xl mx-auto px-6 lg:px-20 py-24 space-y-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-slate-400">Last updated: {new Date().getFullYear()}</p>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Services</h2>
          <p className="text-slate-300">
            Vurizo provides AI automation solutions, custom software development,
            and integration services for businesses.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Payments</h2>
          <p className="text-slate-300">
            All project fees, timelines, and deliverables are defined in separate
            agreements. Payments must be made according to agreed terms.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
          <p className="text-slate-300">
            Upon full payment, ownership of custom-developed software will be
            transferred to the client unless otherwise agreed in writing.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
          <p className="text-slate-300">
            We are not liable for indirect, incidental, or consequential damages
            arising from the use of our services.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
          <p className="text-slate-300">
            We reserve the right to update these Terms at any time. Continued use
            of our services constitutes acceptance of the updated Terms.
          </p>
        </section>
      </main>

      </section>
     <Footer/>
      </>
    );
  }
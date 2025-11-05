import React from 'react';

const PrivacyNoticePage: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Privacy Notice</h1>
        
        <div className="space-y-8">
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose and Scope</h2>
                <p className="mb-4 text-lg">We value the privacy of those who provide personal information to us.</p>
                <p className="mb-4 text-lg">This Privacy Notice describes:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                    <li>What personal information we collect about our visitors and third parties</li>
                    <li>How we use and otherwise process that information</li>
                    <li>The basis upon which we process it</li>
                    <li>With whom it is shared</li>
                    <li>How it is stored</li>
                </ul>
                <p className="text-lg">
                    This Notice applies to all visitors and third parties ("you" and "your"), of IxoraGroup ("we", "our", "us"), and any members of our groups including any subsidiaries.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                <p className="mb-4 text-lg">We may collect and process the following data about you:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg">
                    <li><strong>Information you give us.</strong> This is information about you that you give us by filling in forms on our site or by corresponding with us by phone, e-mail or otherwise. It includes information you provide when you register to use our site, subscribe to our service, and when you report a problem with our site. The information you give us may include your name, address, e-mail address and phone number.</li>
                    <li><strong>Information we collect about you.</strong> With regard to each of your visits to our site we will automatically collect technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, and time zone setting.</li>
                    <li><strong>Information we receive from other sources.</strong> We work closely with third parties (including, for example, business partners, sub-contractors, analytics providers, search information providers). We will notify you when we receive information about you from them and the purposes for which we intend to use that information.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="mb-4 text-lg">We use information held about you in the following ways:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg">
                    <li>To carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us.</li>
                    <li>To provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about.</li>
                    <li>To notify you about changes to our service.</li>
                    <li>To ensure that content from our site is presented in the most effective manner for you and for your computer.</li>
                </ul>
            </section>

             <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
                <p className="text-lg">Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-lg">You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Our Privacy Policy</h2>
                <p className="text-lg">Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
                <p className="text-lg">Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to <a href="mailto:info@ixoragroup.in" className="text-blue-600 underline hover:text-blue-800">info@ixoragroup.in</a>.</p>
            </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNoticePage;

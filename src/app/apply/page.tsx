'use client'

import "@/assets/css/icons.css";
import "@/assets/css/font.css";
import "@/assets/css/main.css";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function Partners() {
  const [formData, setFormData] = useState({
    founderName: '',
    role: '',
    email: '',
    companyName: '',
    stage: '',
    description: '',
    problemSolution: '',
    targetMarket: '',
    revenue: '',
    usesBlockchain: '',
    blockchainDetails: '',
    seekingInvestment: false,
    seekingMarketing: false,
    seekingAdvisory: false,
    investmentDetails: '',
    marketingDetails: '',
    vision: '',
    team: '',
    consent: false
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("YqhHimx4WJvVTMIXU"), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please consent to B2B Exc reviewing your information and contacting you.');
      return;
    }

    const serviceId = "service_sfn99yn";
    const templateId = "template_weetxsy";

    // Prepare the email content
    const emailContent = `
Partnership Application Submission

CONTACT & VENTURE DETAILS:
- Founder/Contact Name: ${formData.founderName}
- Role/Title: ${formData.role}
- Email: ${formData.email}
- Company/Project Name: ${formData.companyName}
- Stage: ${formData.stage}
- Business Description: ${formData.description}

BUSINESS MODEL & MARKET:
- Problem & Solution: ${formData.problemSolution}
- Target Market: ${formData.targetMarket}
- Revenue Model: ${formData.revenue}

BLOCKCHAIN/TOKEN DETAILS:
- Uses Blockchain/Token: ${formData.usesBlockchain}
${formData.usesBlockchain === 'yes' ? `- Blockchain Details: ${formData.blockchainDetails}` : ''}

COLLABORATION INTERESTS:
- Seeking Investment: ${formData.seekingInvestment ? 'Yes' : 'No'}
- Seeking Marketing Partnership: ${formData.seekingMarketing ? 'Yes' : 'No'}
- Seeking Advisory Support: ${formData.seekingAdvisory ? 'Yes' : 'No'}
${formData.seekingInvestment ? `- Investment Details: ${formData.investmentDetails}` : ''}
${formData.seekingMarketing ? `- Marketing Details: ${formData.marketingDetails}` : ''}

TEAM & VISION:
- Long-term Vision: ${formData.vision}
- Core Team: ${formData.team}

Consent: ${formData.consent ? 'Yes' : 'No'}
    `;

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: "Block 2 Block Exchange - Partnership Application",
        recipient: "info@xgepro.com",
        from_name: formData.founderName,
        email: formData.email,
        phone_number: formData.role,
        reply_to: formData.email,
        message: emailContent,
        logoUrl: 'https://www.b2bexc.com/B2BEXC.jpg',
        logoLink: 'https://www.b2bexc.com/',
        logoString: 'Block 2 Block Exchange'
      });
      
      alert('Thank you for your partnership application! We will review your information and get back to you soon.');
      
      // Reset form
      setFormData({
        founderName: '',
        role: '',
        email: '',
        companyName: '',
        stage: '',
        description: '',
        problemSolution: '',
        targetMarket: '',
        revenue: '',
        usesBlockchain: '',
        blockchainDetails: '',
        seekingInvestment: false,
        seekingMarketing: false,
        seekingAdvisory: false,
        investmentDetails: '',
        marketingDetails: '',
        vision: '',
        team: '',
        consent: false
      });
      
    } catch (error) {
      console.log(error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-[#f6f5f4] pt-20 flex flex-col justify-center items-center gap-5">
          <div role="status">
            <svg aria-hidden="true" className="fill-blue-600 w-20 h-20 inline text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="text-blue-600 text-3xl sr-only">Loading...</span>
          </div>
          <h1 className="text-3xl text-[#181a1b]">Submitting Application...</h1>
        </div>
      ) : (
        <div className="fixed inset-0 bg-[#f6f5f4] pt-20 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-4xl font-bold text-[#181a1b] mb-8 text-center">Partners</h1>
          
          <hr className="border-gray-300 mb-8" />
          
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold text-[#181a1b] mb-4">Collaboration & Investment Form</h3>
            <p className="text-[#212121] leading-relaxed mb-6">
              <strong>Thank you for your interest in partnering with B2B Exc.</strong><br />
              Please provide the following details so we can assess how best to collaborate with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Contact & Venture Details */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">1. Contact & Venture Details</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Founder / Contact Name: *
                    </label>
                    <input
                      type="text"
                      name="founderName"
                      value={formData.founderName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Role / Title: *
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Email Address: *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Company / Project Name: *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Stage: *
                    </label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea</option>
                      <option value="prototype">Prototype</option>
                      <option value="in-market">In Market</option>
                      <option value="scaling">Scaling</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Brief one-sentence description of your business: *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Business Model & Market */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">2. Business Model & Market</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      What problem are you solving and what is your solution? *
                    </label>
                    <textarea
                      name="problemSolution"
                      value={formData.problemSolution}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Who is your target market? *
                    </label>
                    <textarea
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      How do you generate revenue? *
                    </label>
                    <textarea
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Blockchain / Token Details */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">3. Blockchain / Token Details (if applicable)</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Do you use blockchain technology or a token? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="usesBlockchain"
                          value="yes"
                          checked={formData.usesBlockchain === 'yes'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="usesBlockchain"
                          value="no"
                          checked={formData.usesBlockchain === 'no'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  
                  {formData.usesBlockchain === 'yes' && (
                    <div>
                      <label className="block text-sm font-medium text-[#212121] mb-2">
                        If <strong>Yes</strong>: please summarise token utility or blockchain role: *
                      </label>
                      <textarea
                        name="blockchainDetails"
                        value={formData.blockchainDetails}
                        onChange={handleInputChange}
                        required={formData.usesBlockchain === 'yes'}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 4: Collaboration Interests */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">4. Collaboration Interests</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Which of the following are you seeking from B2B Exc? (select all):
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="seekingInvestment"
                          checked={formData.seekingInvestment}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        Investment / seed funding
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="seekingMarketing"
                          checked={formData.seekingMarketing}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        Marketing or go-to-market partnership
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="seekingAdvisory"
                          checked={formData.seekingAdvisory}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        Strategic advisory / incubation support
                      </label>
                    </div>
                  </div>
                  
                  {formData.seekingInvestment && (
                    <div>
                      <label className="block text-sm font-medium text-[#212121] mb-2">
                        If you selected <em>Investment</em>: how much are you seeking and what will the funds be used for? *
                      </label>
                      <textarea
                        name="investmentDetails"
                        value={formData.investmentDetails}
                        onChange={handleInputChange}
                        required={formData.seekingInvestment}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                  
                  {formData.seekingMarketing && (
                    <div>
                      <label className="block text-sm font-medium text-[#212121] mb-2">
                        If you selected <em>Marketing partnership</em>: what kind of collaboration do you envision? *
                      </label>
                      <textarea
                        name="marketingDetails"
                        value={formData.marketingDetails}
                        onChange={handleInputChange}
                        required={formData.seekingMarketing}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section 5: Team & Vision */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">5. Team & Vision</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      What is your long-term vision for your venture? *
                    </label>
                    <textarea
                      name="vision"
                      value={formData.vision}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Tell us about your core team: key members and relevant experience: *
                    </label>
                    <textarea
                      name="team"
                      value={formData.team}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Section 6: Final Note */}
              <div>
                <h4 className="text-xl font-semibold text-[#181a1b] mb-4">6. Final Note</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#212121] mb-2">
                      Have you uploaded your pitch deck, one-pager or token-whitepaper? (optional)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        required
                        className="mr-2"
                      />
                      I consent to B2B Exc reviewing this information and contacting me. *
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
}

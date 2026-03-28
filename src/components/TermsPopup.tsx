"use client";

import { useEffect } from "react";

export default function TermsPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-[720px] mx-4 my-8 md:my-16 p-6 md:p-10"
        style={{
          background: "#000",
          border: "2px solid #ff0000",
          borderRadius: 16,
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2
          className="text-[18px] md:text-[28px] uppercase text-white mb-2 pr-8"
          style={{ fontFamily: "obviously-extended", fontWeight: 700 }}
        >
          Indian Scroll Festival 2026
        </h2>
        <h3
          className="text-[16px] md:text-[24px] uppercase text-white mb-1"
          style={{ fontFamily: "obviously-extended", fontWeight: 600 }}
        >
          Terms and Conditions
        </h3>
        <p
          className="text-[12px] md:text-[14px] text-white/50 mb-6 md:mb-10"
          style={{ fontFamily: "obviously", fontWeight: 300 }}
        >
          Edition 01 &nbsp;|&nbsp; Effective Date: 1 April 2025
        </p>

        {/* Content */}
        <div
          className="text-[13px] md:text-[15px] text-white/80 leading-relaxed space-y-5"
          style={{ fontFamily: "obviously", fontWeight: 300 }}
        >
          <p>These Terms and Conditions (&quot;Terms&quot;) govern participation in the Indian Scroll Festival 2026 (&quot;ISF&quot; or &quot;the Festival&quot;), organised by Talented and MK (collectively, &quot;the Organisers&quot;), a vertical short-form film festival held in Bengaluru, India. By submitting a film or otherwise participating in ISF 2026, participants agree to be bound by these Terms in their entirety. Participants are advised to read these Terms carefully before submitting.</p>

          <div>
            <p className="text-white font-semibold mb-2">1. DEFINITIONS</p>
            <p>For the purposes of these Terms, the following definitions apply:</p>
            <p className="mt-2">&quot;Festival&quot; refers to the Indian Scroll Festival 2026, Edition 01, including all associated events, screenings, and the Awards Night.</p>
            <p className="mt-1">&quot;Organisers&quot; refers to Talented and MK, the entities jointly responsible for the organisation and administration of ISF 2026.</p>
            <p className="mt-1">&quot;Participant&quot; or &quot;Submitter&quot; refers to any individual or entity that submits a film for consideration under these Terms.</p>
            <p className="mt-1">&quot;Submission&quot; refers to any short-form vertical video content submitted by a Participant through the official submission portal.</p>
            <p className="mt-1">&quot;Submission Fee&quot; refers to the non-refundable fee payable by Participants at the time of submission, as specified on the official submission portal.</p>
            <p className="mt-1">&quot;Content&quot; refers to the audio-visual work contained within a Submission, including all creative, textual, and musical elements therein.</p>
            <p className="mt-1">&quot;Shortlist&quot; refers to the selection of Submissions chosen by the Jury to advance to the gala screening round.</p>
            <p className="mt-1">&quot;Awards Night&quot; refers to the live gala screening event to be held on 16 May 2026, at which winners shall be announced.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">2. ELIGIBILITY</p>
            <p>Participation in ISF 2026 is open to individuals and entities worldwide, subject to the following conditions:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Participants must be the original creators or authorised rights holders of the Content submitted.</li>
              <li>Submissions must be original, unpublished works not previously released on any public platform, including but not limited to Instagram, YouTube, TikTok, or any other social media or streaming platform.</li>
              <li>Participants under the age of eighteen (18) must obtain written consent from a parent or legal guardian prior to submission. By submitting, such consent is deemed to have been obtained.</li>
              <li>Employees, contractors, and immediate family members of the Organisers are ineligible to submit.</li>
              <li>There is no restriction on the nationality or country of residence of the Participant.</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">3. SUBMISSION REQUIREMENTS</p>
            <p className="text-white font-medium mt-2">3.1 Format and Technical Specifications</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>All Submissions must be in a 9:16 (vertical) aspect ratio.</li>
              <li>Maximum duration: two (2) minutes.</li>
              <li>Maximum file size: 200 MB.</li>
              <li>Accepted file formats are as specified on the submission portal.</li>
            </ul>
            <p className="text-white font-medium mt-3">3.2 Categories</p>
            <p className="mt-1">Submissions must be entered under one of the following categories: Comedy, AI, Edits, Emotional, or Food. Each category is subject to its own judging criteria as published on the official website. Participants may submit entries across multiple categories; each category entry requires a separate submission and a separate Submission Fee.</p>
            <p className="text-white font-medium mt-3">3.3 Submission Process</p>
            <ol className="list-decimal ml-5 mt-1 space-y-1">
              <li>Access the official submission portal at payment.indianscrollfestival.com.</li>
              <li>Select the applicable category.</li>
              <li>Complete all required fields and upload the Content.</li>
              <li>Pay the applicable Submission Fee.</li>
              <li>Submission is complete upon receipt of a confirmation acknowledgement from the Organisers.</li>
            </ol>
            <p className="text-white font-medium mt-3">3.4 Submission Deadline</p>
            <p className="mt-1">All Submissions must be received by 23 April 2026, 11:59 PM IST. Submissions received after this deadline will not be considered. The Organisers accept no responsibility for late or failed submissions arising from technical issues on the part of the Participant.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">4. SUBMISSION FEE AND REFUND POLICY</p>
            <p>A Submission Fee is required for each entry submitted to ISF 2026. The applicable fee is published on the official submission portal and is subject to applicable taxes under Indian law.</p>
            <p className="mt-2">The Submission Fee is non-refundable as a general policy. However, the Organisers may, at their sole discretion, consider refund requests on a case-by-case basis. Refund requests must be submitted in writing to the Organisers via the official contact channels prior to the Submission Deadline. The Organisers&apos; decision on any refund request shall be final and binding. No refunds shall be issued after the Submission Deadline under any circumstances.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">5. INTELLECTUAL PROPERTY AND LICENSING</p>
            <p className="text-white font-medium mt-2">5.1 Ownership</p>
            <p className="mt-1">Participants retain copyright and all underlying intellectual property rights in and to the Content submitted.</p>
            <p className="text-white font-medium mt-3">5.2 Licence Grant</p>
            <p className="mt-1">By submitting Content to ISF 2026, each Participant grants the Organisers a non-exclusive, royalty-free, perpetual, irrevocable, worldwide licence to use, reproduce, exhibit, broadcast, stream, distribute, edit, adapt, and otherwise exploit the Content for the following purposes:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Screening at the Festival, including the Awards Night and any associated or satellite events.</li>
              <li>Publishing and posting the Content on ISF&apos;s owned social media channels, website, and digital platforms, including but not limited to Instagram, YouTube, and any other channels operated by the Organisers, with or without prior notice to the Participant.</li>
              <li>Collaborative promotional activity with the original creator, including co-posting, reposting, tagging, and social media collaborations where the Organisers will endeavour to credit and collaborate with the Participant as the original creator.</li>
              <li>Promotional, marketing, and publicity activities in connection with ISF 2026 and future editions of the Festival, including use in press materials and partner communications.</li>
              <li>Documentation and archival purposes relating to the Festival.</li>
            </ul>
            <p className="mt-2">The Organisers shall retain these rights in perpetuity. While the Organisers will make reasonable efforts to credit the original creator in social media posts and collaborative activity, the Participant acknowledges that operational constraints may occasionally limit the form of attribution. This licence does not entitle the Organisers to commercially license the Content to unaffiliated third parties for independent commercial exploitation without the prior written consent of the Participant.</p>
            <p className="text-white font-medium mt-3">5.3 Third-Party Rights</p>
            <p className="mt-1">Participants warrant that the Content does not infringe the intellectual property rights, privacy rights, or any other rights of any third party. Where the Content includes music, footage, or other third-party material, Participants are solely responsible for obtaining all necessary licences, clearances, and consents prior to submission. The Organisers shall not be liable for any claims arising from the use of third-party material in submitted Content.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">6. CONTENT STANDARDS AND PROHIBITED CONTENT</p>
            <p>All Content submitted to ISF 2026 must comply with applicable Indian law and the following content standards. The Organisers reserve the right to reject or disqualify any Submission that contains:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Hate speech, incitement to discrimination, or content that targets individuals or groups on the basis of religion, race, caste, gender, sexual orientation, nationality, disability, or any other protected characteristic.</li>
              <li>Nudity, sexually explicit material, or content of a sexually suggestive nature.</li>
              <li>Political propaganda, content endorsing or campaigning for any political party, candidate, or movement.</li>
              <li>Content that defames, harasses, or unlawfully invades the privacy of any identifiable individual.</li>
              <li>Content that glorifies, promotes, or facilitates illegal activity.</li>
              <li>Content that infringes the intellectual property rights of any third party.</li>
            </ul>
            <p className="mt-2">The Organisers shall be the sole arbiter of whether submitted Content meets these standards, and their determination shall be final.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">7. DISQUALIFICATION</p>
            <p>The Organisers reserve the right to disqualify any Submission, at any stage of the Festival, on any of the following grounds:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>The Content violates applicable platform guidelines or content standards as set out in Clause 6.</li>
              <li>The Content has been previously published on any public platform prior to submission.</li>
              <li>The Submission does not meet the technical requirements specified in Clause 3.1.</li>
              <li>The Content is found to constitute plagiarism or to infringe the intellectual property rights of any third party.</li>
              <li>The Participant has provided false or misleading information in connection with their Submission.</li>
              <li>The Organisers determine, in their sole discretion, that disqualification is appropriate for any other reason.</li>
            </ul>
            <p className="mt-2">Disqualification shall not entitle the Participant to a refund of the Submission Fee. The Organisers shall not be required to provide reasons for disqualification in all instances.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">8. JUDGING AND SELECTION</p>
            <p>Submissions will be evaluated by a panel of judges (the &quot;Jury&quot;) comprising creators, industry professionals, and other individuals appointed by the Organisers. The Jury will assess Submissions in accordance with the judging criteria published on the official website for each category.</p>
            <p className="mt-2">The Shortlist will be announced on 1 May 2026. Shortlisted Participants will be contacted via the email address provided at the time of submission and invited to attend the Awards Night on 16 May 2026.</p>
            <p className="mt-2">The decisions of the Jury are final and binding. No correspondence will be entered into regarding judging outcomes. The Organisers reserve the right to modify the composition of the Jury at any time without prior notice.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">9. PRIZES</p>
            <p>ISF 2026 will award prizes to winning Participants across categories. The Organisers have constituted a prize pool for this purpose; the quantum of the prize pool, the distribution across categories and award tiers, and the method of disbursement will be determined by the Organisers and communicated to winners at or following the Awards Night. The Organisers reserve the right to alter the prize structure, including the quantum and distribution of prizes, at any time prior to the Awards Night.</p>
            <p className="mt-2">Prize payments are subject to applicable tax deductions under Indian law, including Tax Deducted at Source (TDS) where applicable. Winners are solely responsible for any tax obligations arising from receipt of prizes.</p>
            <p className="mt-2">Prizes are non-transferable. Where a winner is unable to accept a prize, the Organisers reserve the right to award that prize to the next eligible Participant.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">10. PARTICIPANT REPRESENTATIONS AND WARRANTIES</p>
            <p>By submitting to ISF 2026, each Participant represents and warrants that:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>They are the original creator or authorised rights holder of the Content submitted.</li>
              <li>The Content is original and does not infringe the intellectual property, privacy, or other rights of any third party.</li>
              <li>All necessary consents, licences, and clearances in respect of third-party material contained in the Content have been obtained.</li>
              <li>The Content has not been previously published on any public platform.</li>
              <li>All information provided in the submission process is accurate and complete.</li>
              <li>They have the legal capacity to enter into these Terms and, where applicable, have obtained all required consents from parents or guardians.</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">11. LIMITATION OF LIABILITY</p>
            <p>To the fullest extent permitted by applicable law, the Organisers shall not be liable for any loss, damage, injury, or expense suffered by a Participant in connection with their participation in ISF 2026, including but not limited to:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Loss or corruption of submitted Content due to technical failure.</li>
              <li>Failure to receive or process a Submission due to network, server, or platform errors.</li>
              <li>Any loss of opportunity, reputation, or revenue arising from disqualification or non-selection.</li>
            </ul>
            <p className="mt-2">The Organisers&apos; aggregate liability to any Participant shall not exceed the amount of the Submission Fee paid by that Participant.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">12. PRIVACY AND DATA</p>
            <p>The Organisers will collect and process personal data provided by Participants in connection with the submission process. Such data will be used solely for the administration of ISF 2026, communication with Participants, and promotional activities relating to the Festival. The Organisers will not sell or otherwise transfer personal data to third parties except as required for the administration of the Festival or as required by law.</p>
            <p className="mt-2">By submitting, Participants consent to the Organisers using their name, likeness, and statements for promotional purposes in connection with ISF 2026 and future editions of the Festival, without further compensation.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">13. MODIFICATIONS</p>
            <p>The Organisers reserve the right to amend, modify, or supplement these Terms at any time. Any amendments will be published on the official website and will take effect upon publication. Continued participation in the Festival following publication of any amendment constitutes acceptance of the amended Terms.</p>
            <p className="mt-2">The Organisers further reserve the right to modify the Festival timeline, venue, format, prize structure, or any other aspect of the Festival at their sole discretion, including the right to cancel the Festival in exceptional circumstances. In the event of cancellation, the Organisers&apos; liability shall be limited to a refund of Submission Fees at their discretion.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">14. GOVERNING LAW AND DISPUTE RESOLUTION</p>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or in connection with these Terms, or the breach, termination, or invalidity thereof, shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.</p>
            <p className="mt-2">Participants are encouraged to raise any concerns with the Organisers directly in the first instance, through the official contact channels published on the Festival website.</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">15. GENERAL</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>These Terms constitute the entire agreement between the Participant and the Organisers in relation to the subject matter hereof and supersede all prior representations, agreements, or understandings.</li>
              <li>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</li>
              <li>The Organisers&apos; failure to enforce any provision of these Terms shall not constitute a waiver of their rights thereunder.</li>
              <li>These Terms are written in English. In the event of any conflict arising from a translation, the English version shall prevail.</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">16. DATA SHARING WITH PARTNERS</p>
            <p>In connection with ISF 2026, the Organisers may share aggregated, anonymised, and non-personally identifiable data and insights derived from Participant submissions, attendance, and engagement with select brand partners, sponsors, and collaborators for the purposes of industry insights, marketing intelligence, and partnership evaluation.</p>
            <p className="mt-2">By participating in the Festival, Participants acknowledge and consent to such use and sharing of aggregated data.</p>
          </div>

          <div className="border-t border-white/20 pt-5 mt-5">
            <p className="text-white font-semibold mb-2">CONTACT</p>
            <p>For queries relating to these Terms, please contact the Organisers via the official Instagram channel <a href="https://www.instagram.com/indianscrollfestival/" target="_blank" rel="noopener noreferrer" className="text-white underline">@indianscrollfestival</a> or through the website at indianscrollfestival.com.</p>
            <p className="mt-4 text-center text-white/40 text-[12px]">ISF 2026 &bull; Indian Scroll Festival &bull; All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

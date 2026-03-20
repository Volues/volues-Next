import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import ThqHeaderElm from '../components/thq-header-elm'
import Footer from '../components/footer'

const SP = (props) => {
  return (
    <>
      <div className="sp-container1">
        <Head>
          <title>
            SP - Volues | High-Performance Digital Product & Growth Agency
          </title>
          <meta
            name="description"
            content="Volues builds scalable web, mobile, and enterprise software systems. We turn abstract visions into high-performance digital reality. Based in Abuja, Nigeria."
          />
          <meta
            property="og:title"
            content="SP - Volues | High-Performance Digital Product &amp; Growth Agency"
          />
          <meta
            property="og:description"
            content="Volues is a digital product and growth partner for ambitious businesses. We design, build, and scale engineered web, mobile, and enterprise systems that turn abstract visions into profitable reality"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/55c25e7a-63b6-4ed1-af5d-fd89cf61ddf0/08464d16-53e2-4939-91b0-5ad6186a93cd?org_if_sml=1&amp;force_format=original"
          />
          <link rel="canonical" href="https://mgnt.teleporthq.site/sp" />
          <meta property="og:url" content="https://mgnt.teleporthq.site/sp" />
        </Head>
        <ThqHeaderElm
          text={
            <Fragment>
              <span className="sp-text100">Homes</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="sp-text101">Our Services</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="sp-text102">About Us</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <Link href="/contact">
                <a className="sp-link">
                  <span>
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Us</span>
                </a>
              </Link>
            </Fragment>
          }
          rootClassName="thq-header-elmroot-class-name6"
        ></ThqHeaderElm>
        <div className="sp-container2">
          <h1 className="sp-text105">Privacy Policy</h1>
          <span className="sp-text106">Effective Date: February 24, 2026</span>
          <span className="sp-text107">Last Updated: February 24, 2026</span>
          <span className="sp-text108">
            <span className="sp-text109">1. Introduction</span>
            <br></br>
            <span>
              Volues Technologies LTD (“Volues”, “We”, “Us”, or “Our”) respects
              your privacy and is committed to protecting your personal data in
              accordance with applicable laws and international best practices.
            </span>
            <br></br>
            <br></br>
            <span>
              This Privacy Policy explains how we collect, use, disclose, store,
              and safeguard personal information when you:
            </span>
            <br></br>
            <span>Visit our website</span>
            <br></br>
            <span>
              Use our software, mobile applications, or enterprise platforms
            </span>
            <br></br>
            <span>
              Engage our web development, mobile development, digital marketing,
              or enterprise software services
            </span>
            <br></br>
            <span>Communicate with us</span>
            <br></br>
            <span>This Policy complies with:</span>
            <br></br>
            <span>The Nigeria Data Protection Act (NDPA)</span>
            <br></br>
            <span>
              The General Data Protection Regulation (GDPR), where applicable
            </span>
            <br></br>
            <span>
              Applicable international data protection and privacy laws
            </span>
            <br></br>
            <br></br>
            <span className="sp-text133">2. Who We Are</span>
            <br></br>
            <br></br>
            <span>Volues Technologies LTD</span>
            <br></br>
            <br></br>
            <span>
              A duly registered company under the laws of the Federal Republic
              of Nigeria.
            </span>
            <br></br>
            <span>We are a software and technology company providing:</span>
            <br></br>
            <span>• </span>
            <span>Custom Web Development</span>
            <br></br>
            <span>• </span>
            <span>Mobile Application Development</span>
            <br></br>
            <span>• </span>
            <span>Enterprise Software Solutions</span>
            <br></br>
            <span>• </span>
            <span>Cloud and AI Integration</span>
            <br></br>
            <span>• </span>
            <span>Digital Marketing Services</span>
            <br></br>
            <span>• </span>
            <span>Technology and Innovation Consulting</span>
            <br></br>
            <span>
              For the purpose of data protection laws, Volues acts as either:
            </span>
            <br></br>
            <br></br>
            <span className="sp-text164">A Data Controller</span>
            <span>
              {' '}
              (where we determine how and why personal data is processed), or
            </span>
            <br></br>
            <span className="sp-text167">A Data Processor</span>
            <span> (where we process data on behalf of our clients).</span>
            <br></br>
            <br></br>
            <span className="sp-text171">3. Information We Collect</span>
            <br></br>
            <br></br>
            <span>
              We may collect the following categories of personal data:
            </span>
            <br></br>
            <span>A. Identity Information</span>
            <br></br>
            <span>Full name</span>
            <br></br>
            <span>Company name</span>
            <br></br>
            <span>Job title</span>
            <br></br>
            <span>Username or account identifier</span>
            <br></br>
            <br></br>
            <span>B. Contact Information</span>
            <br></br>
            <span>Email address</span>
            <br></br>
            <span>Phone number</span>
            <br></br>
            <span>Business address</span>
            <br></br>
            <br></br>
            <span>C. Technical Data</span>
            <br></br>
            <span>IP address</span>
            <br></br>
            <span>Browser type and version</span>
            <br></br>
            <span>Device information</span>
            <br></br>
            <span>Operating system</span>
            <br></br>
            <span>Time zone settings</span>
            <br></br>
            <span>Usage logs</span>
            <br></br>
            <br></br>
            <span>D. Transactional Information</span>
            <br></br>
            <span>
              Payment details (processed via secure third-party payment
              providers)
            </span>
            <br></br>
            <br></br>
            <span>Billing information</span>
            <br></br>
            <span>Service subscription details</span>
            <br></br>
            <span>E. Marketing and Communication Data</span>
            <br></br>
            <span>Preferences in receiving marketing communications</span>
            <br></br>
            <span>Feedback and survey responses</span>
            <br></br>
            <br></br>
            <span>
              We do not intentionally collect data from individuals under 18
              years of age.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text230">4. How We Collect Your Data</span>
            <br></br>
            <span>We collect data through:</span>
            <br></br>
            <span>Website forms (Contact Us, Request Quote, Newsletter)</span>
            <br></br>
            <span>Direct communication (email, phone, WhatsApp)</span>
            <br></br>
            <br></br>
            <span>Service agreements and contracts</span>
            <br></br>
            <span>Cookies and tracking technologies</span>
            <br></br>
            <span>Client onboarding processes</span>
            <br></br>
            <span>Automated technologies (analytics tools)</span>
            <br></br>
            <br></br>
            <span className="sp-text248">5. Legal Basis for Processing</span>
            <br></br>
            <span>
              We process personal data under the following lawful bases:
            </span>
            <br></br>
            <span>Performance of a contract</span>
            <br></br>
            <span>Compliance with legal obligations</span>
            <br></br>
            <span>Legitimate business interests</span>
            <br></br>
            <span>Consent (</span>
            <span className="sp-text259">where required</span>
            <span>)</span>
            <br></br>
            <span>Protection of vital interests</span>
            <br></br>
            <br></br>
            <span className="sp-text265">6. How We Use Your Information</span>
            <br></br>
            <span>We use personal data to:</span>
            <br></br>
            <span>Provide and manage our services</span>
            <br></br>
            <span>Develop, deploy, and maintain software solutions</span>
            <br></br>
            <span>Improve website performance and user experience</span>
            <br></br>
            <span>Process payments and invoices</span>
            <br></br>
            <span>Communicate updates and service notices</span>
            <br></br>
            <span>Provide customer support</span>
            <br></br>
            <span>Send marketing communications (with consent)</span>
            <br></br>
            <span>Prevent fraud and ensure security</span>
            <br></br>
            <span>Comply with legal and regulatory obligations</span>
            <br></br>
            <br></br>
            <span className="sp-text288">7. Data Sharing and Disclosure</span>
            <br></br>
            <span>We do not sell personal data.</span>
            <br></br>
            <span>We may share information with:</span>
            <br></br>
            <span>
              Trusted third-party service providers (hosting, cloud storage,
              analytics)
            </span>
            <br></br>
            <br></br>
            <span>Payment processors</span>
            <br></br>
            <span>Professional advisers (lawyers, auditors)</span>
            <br></br>
            <span>Regulatory authorities when legally required</span>
            <br></br>
            <span>
              Business partners under strict confidentiality agreements
            </span>
            <br></br>
            <br></br>
            <span>
              All third-party processors are contractually obligated to
              safeguard data.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text309">8. International Data Transfers</span>
            <br></br>
            <span>
              Where personal data is transferred outside Nigeria, we ensure:
            </span>
            <br className="sp-text312"></br>
            <br className="sp-text313"></br>
            <span className="sp-text314">
              Adequate data protection safeguards
            </span>
            <br className="sp-text315"></br>
            <span className="sp-text316">Contractual protections</span>
            <br className="sp-text317"></br>
            <span className="sp-text318">
              Compliance with NDPA and GDPR requirements
            </span>
            <br className="sp-text319"></br>
            <br className="sp-text320"></br>
            <span className="sp-text321">9. Data Security</span>
            <br></br>
            <br></br>
            <span>
              Volues implements appropriate technical and organizational
              measures, including:
            </span>
            <br></br>
            <span>Encryption (in transit and at rest)</span>
            <br></br>
            <span>Secure cloud infrastructure</span>
            <br></br>
            <span>Access control and authentication protocols</span>
            <br></br>
            <span>Regular security assessments</span>
            <br></br>
            <span>Staff confidentiality obligations</span>
            <br></br>
            <br></br>
            <span>
              While we use commercially reasonable safeguards, no system can be
              guaranteed 100% secure.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text340">10. Data Retention</span>
            <br></br>
            <br></br>
            <span>We retain personal data only as long as necessary to:</span>
            <br></br>
            <span>Fulfill contractual obligations</span>
            <br></br>
            <span>Meet legal and regulatory requirements</span>
            <br></br>
            <span>Resolve disputes</span>
            <br></br>
            <span>Enforce agreements</span>
            <br></br>
            <span>
              Data no longer required is securely deleted or anonymized.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text356">11. Your Data Protection Rights</span>
            <br></br>
            <br></br>
            <span>Subject to applicable law, you may have the right to:</span>
            <br></br>
            <br></br>
            <span>Access your personal data</span>
            <br></br>
            <span>Correct inaccurate data</span>
            <br></br>
            <span>Request deletion</span>
            <br></br>
            <span>Restrict or object to processing</span>
            <br></br>
            <span>Withdraw consent</span>
            <br></br>
            <span>Data portability</span>
            <br></br>
            <span>
              Lodge a complaint with the relevant data protection authority
            </span>
            <br></br>
            <br></br>
            <span>
              In Nigeria, complaints may be directed to the Nigeria Data
              Protection Commission.
            </span>
            <br></br>
            <br></br>
            <span>To exercise your rights, contact us at:</span>
            <br></br>
            <br></br>
            <span>Compliance@volues.com</span>
            <br></br>
            <br></br>
            <span className="sp-text386">
              12. Cookies and Tracking Technologies
            </span>
            <br></br>
            <br></br>
            <span>Our website uses cookies to:</span>
            <br></br>
            <span>Improve functionality</span>
            <br></br>
            <span>Analyze traffic</span>
            <br></br>
            <span>Personalize user experience</span>
            <br></br>
            <span>Support marketing campaigns</span>
            <br></br>
            <br></br>
            <span>
              Users may control cookie preferences via browser settings.
            </span>
            <br></br>
            <br></br>
            <span>A separate Cookie Policy may provide more details.</span>
            <br></br>
            <br className="sp-text405"></br>
            <span className="sp-text406">13. Third-Party Links</span>
            <br></br>
            <br></br>
            <span>Our website may contain links to third-party websites.</span>
            <br></br>
            <span>
              We are not responsible for their privacy practices. Users are
              encouraged to review third-party privacy policies.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text414">
              14. Confidential Client Data (For Enterprise &amp; Government
              Projects)
            </span>
            <br></br>
            <br></br>
            <span>
              Where Volues processes sensitive enterprise, financial, or
              government-related data:
            </span>
            <br></br>
            <span>We operate under strict contractual confidentiality.</span>
            <br></br>
            <span>We implement enhanced security controls.</span>
            <br></br>
            <span>Data is processed strictly per client instructions.</span>
            <br></br>
            <br></br>
            <span className="sp-text426">
              15. Changes to This Privacy Policy
            </span>
            <br></br>
            <br></br>
            <span>
              We may update this Privacy Policy periodically to reflect:
            </span>
            <br></br>
            <br></br>
            <span>Legal changes</span>
            <br></br>
            <span>Regulatory requirements</span>
            <br></br>
            <span>Service updates</span>
            <br></br>
            <br></br>
            <span>
              Changes will be posted on this page with an updated effective
              date.
            </span>
            <br></br>
            <br></br>
            <span className="sp-text442">16. Contact Information</span>
            <br></br>
            <br></br>
            <span>
              For questions regarding this Privacy Policy or your personal data:
            </span>
            <br></br>
            <br></br>
            <span>Volues Technologies LTD</span>
            <br></br>
            <br></br>
            <span>
              Aminu Kno Crescent, Wuse II, Federal Capital Territory, Abuja 
            </span>
            <span>Nigeria</span>
            <br></br>
            <br></br>
            <span>Email: Compliance@volues.com</span>
            <br></br>
            <br></br>
            <span>Phone: +2347079388502</span>
          </span>
        </div>
        <Footer
          text={
            <Fragment>
              <span className="sp-text459">About Volues</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="sp-text460">Our Culture</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="sp-text461">Careers</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sp-text462">Our Process</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="sp-text463">Our Services</span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span className="sp-text464">Blog</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="sp-text465">Resources</span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="sp-text466">Company</span>
            </Fragment>
          }
          text1111={
            <Fragment>
              <span className="sp-text467">White Papers</span>
            </Fragment>
          }
          text1112={
            <Fragment>
              <span className="sp-text468">Privacy Policy</span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="sp-text469">Legal</span>
            </Fragment>
          }
          text11111={
            <Fragment>
              <span className="sp-text470">Tech Insight</span>
            </Fragment>
          }
          text11112={
            <Fragment>
              <span className="sp-text471">Terms of Service</span>
            </Fragment>
          }
          text111111={
            <Fragment>
              <span className="sp-text472">Our Team</span>
            </Fragment>
          }
          text111112={
            <Fragment>
              <span className="sp-text473">Cookie Policy</span>
            </Fragment>
          }
          text11111111={
            <Fragment>
              <span className="sp-text474">Contact Us</span>
            </Fragment>
          }
          rootClassName="footerroot-class-name17"
          text111111111={
            <Fragment>
              <span className="sp-text475">Security Policy</span>
            </Fragment>
          }
          text1111111111={
            <Fragment>
              <span className="sp-text476">NDA &amp; DPA</span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .sp-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #050505;
          }
          .sp-text100 {
            display: inline-block;
          }
          .sp-text101 {
            display: inline-block;
          }
          .sp-text102 {
            display: inline-block;
          }
          .sp-link {
            color: var(--dl-color-secondary-400);
            display: inline-block;
            text-decoration: none;
          }
          .sp-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-tripleunit);
            padding-left: var(--dl-layout-space-tripleunit);
            margin-bottom: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-tripleunit);
            justify-content: center;
            background-color: #050505;
          }
          .sp-text105 {
            font-family: 'Inter';
          }
          .sp-text106 {
            font-family: 'Inter';
          }
          .sp-text107 {
            font-family: 'Inter';
          }
          .sp-text108 {
            font-family: 'Inter';
          }
          .sp-text459 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text460 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text461 {
            color: #050505;
            display: inline-block;
            font-size: 14px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 400;
          }
          .sp-text462 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text463 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text464 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text465 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .sp-text466 {
            color: rgb(5, 5, 5);
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .sp-text467 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text468 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text469 {
            color: #050505;
            display: inline-block;
            font-size: 20px;
            font-family: 'Inter';
          }
          .sp-text470 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text471 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text472 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text473 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text474 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text475 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          .sp-text476 {
            color: #050505;
            display: inline-block;
            font-family: 'Inter';
          }
          @media (max-width: 991px) {
            .sp-container1 {
              background-color: #050505;
            }
            .sp-text459 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text460 {
              color: #050505;
            }
            .sp-text461 {
              color: #050505;
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .sp-text462 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text463 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text464 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text465 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text466 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text467 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text468 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text469 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text470 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text471 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text472 {
              color: rgb(5, 5, 5);
              font-family: Inter;
            }
            .sp-text473 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text474 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text475 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text476 {
              color: #050505;
              font-family: Inter;
            }
          }
          @media (max-width: 767px) {
            .sp-container1 {
              background-color: #050505;
            }
            .sp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
            }
            .sp-container2 {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .sp-text108 {
              width: 100%;
            }
            .sp-text459 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text460 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text461 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-style: inherit;
              font-family: Inter;
              font-weight: 400;
            }
            .sp-text462 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text463 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text464 {
              color: #050505;
              font-family: Inter;
            }
            .sp-text465 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text466 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text467 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text468 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text469 {
              color: #050505;
              font-size: 20px;
              font-family: Inter;
            }
            .sp-text470 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text471 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text472 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text473 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text474 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text475 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
            .sp-text476 {
              color: rgb(5, 5, 5);
              font-size: 16px;
              font-family: Inter;
            }
          }
          @media (max-width: 479px) {
            .sp-container1 {
              background-color: #050505;
            }
            .sp-link {
              color: var(--dl-color-theme-neutral-light);
              font-size: 24px;
              font-family: Inter;
              font-weight: 400;
              line-height: 1.25;
              margin-bottom: var(--dl-layout-space-unit);
              text-decoration: none;
            }
            .sp-container2 {
              width: 90%;
              background-color: #050505;
            }
            .sp-text105 {
              font-family: Inter;
              margin-bottom: 20px;
            }
            .sp-text106 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
            }
            .sp-text107 {
              font-size: 12px;
              align-self: center;
              text-align: center;
              font-family: Inter;
              margin-left: 0px;
            }
            .sp-text108 {
              width: 100%;
              margin-top: 20px;
              text-align: left;
              font-family: Inter;
              margin-bottom: 0px;
            }
            .sp-text109 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text133 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text164 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text167 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text171 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text230 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text248 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text259 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text265 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text288 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text309 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text312 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text313 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text314 {
              font-weight: 400;
            }
            .sp-text315 {
              font-weight: 400;
            }
            .sp-text316 {
              font-weight: 400;
            }
            .sp-text317 {
              font-weight: 400;
            }
            .sp-text318 {
              font-weight: 400;
            }
            .sp-text319 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text320 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text321 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text340 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text356 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text386 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text405 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text406 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text414 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text426 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text442 {
              font-style: normal;
              font-weight: 700;
            }
            .sp-text459 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text460 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text461 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text462 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text463 {
              color: #050505;
              font-size: 13px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text464 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text465 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .sp-text466 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              text-align: left;
              font-family: Inter;
            }
            .sp-text467 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text468 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text469 {
              color: rgb(5, 5, 5);
              font-size: 14px;
              font-family: Inter;
            }
            .sp-text470 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text471 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text472 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text473 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text474 {
              color: #050505;
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text475 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .sp-text476 {
              color: #050505;
              font-size: 12px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
          }
        `}
      </style>
    </>
  )
}

export default SP

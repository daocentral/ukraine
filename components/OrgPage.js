import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";
import Badge from "./Badge/badge";

export default function OrgPage({ orgData, showFrontPageLink, expandModal}) {
  const [
    orgName,
    donationLinks,
    largeDonationsContact,
    englishDesc,
    cause,
    spendingTowards,
    accomplishments,
    backedBy,
    paymentMethod,
    crypto,
    instagram,
    facebook,
    twitter,
    website,
    bannerImage
  ] = orgData;
  
  const bannerViewableUrl = typeof bannerImage === 'string' ? bannerImage.replace('file/d/', 'uc?id=').replace('/view?usp=sharing','') : '';
  
  return (
    <div>
      <div className="w-100 h-60 lg:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bannerImage==undefined ? '/assets/default_cover.png' : bannerViewableUrl} alt="Organization Logo" className=" w-full h-full object-cover object-center"/>
      </div>
      {showFrontPageLink && (
        <div className="mt-12">
          <Link href="/">
            <a className="h-12 font-bold">&lt; BROWSE ORGANIZATIONS</a>
          </Link>
        </div>
      )}
      <div id="organization" className={expandModal ? 'p-0' : "p-8 md:p-12"}>
        <h1 className="text-5xl font-black">{orgName}</h1>
        <div
          id="links-area"
          className="mt-12 flex flex-wrap w-100 justify-between items-center"
        >
          <div className="flex flex-wrap flex-row">
            {donationLinks.split("\n").map((link, index) => {
              return (
                <div className="sr-only" key={index}>
                {link && (
                    <div key={'donations-'+index} className="w-60 container transition duration-200 mr-4 ease-in-out text-l rounded-md font-bold px-14 py-3 text-white text-center bg-uablue-default mb-2 hover:bg-uablue-accent">
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                          {index == 0 ? "Donate Now " : "Donation Link " + index}
                      </a>
                    </div>
                  )}
                </div> 
              );
            })}
          </div>
          <div id="socials" className="flex flex-wrap items-center">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="instagram"
                  height="20px"
                  width="20px"
                ></Image>
              </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-8"
                >
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt={facebook}
                    height="20px"
                    width="20px"
                  ></Image>
                </a>
                )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  height="20px"
                  width="20px"
                ></Image>
              </a>
              )}
          </div>
        </div>
        <section className="max-w-5xl mt-12">
          <h2 className="font-black text-xl">
            Introduction
          </h2>
          <p className="mt-6 mb-3">
            {englishDesc}
          </p>
          <Badge value={`${cause} Supplies`}/>
          {spendingTowards && (
          <>
            <h2 className="font-black text-xl mt-12">
              How we will spend donations
            </h2>
            <p className="mt-6">
              {spendingTowards}
            </p>
          </>)}
          {accomplishments && (
          <>
            <h2 className="font-black text-xl mt-12">
              What we&apos;ve accomplished so far
            </h2>
            <p className="mt-6">
              To read about our accomplishments, please visit: <br></br>
              <a href={accomplishments} target="_blank" rel="noreferrer" className="text-blue-500 border-b-2 border-blue-500">
                CHECK OUT OUR WEBSITE
              </a>
            </p>
          </>)}
          {backedBy && (
            <>
              <h2 className="font-black text-xl mt-12">
                Institutions that support us
              </h2>
              <p className="mt-6">
                {backedBy}
              </p>
            </>
          )}
          {largeDonationsContact && (
            <>
              <h2 className="font-black text-xl mt-12">
                Contant information
              </h2>
              <p className="mt-6">
                {largeDonationsContact}
              </p>
            </>
          )}
          <h2 className="font-black text-2xl mt-12 mb-4">
            Payment Method
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {paymentMethod.split(',').map((method, index) => {
              return (
                <Badge key={'method-'+index} value={method}/>
              )
            })}
            {crypto == "yes" && (
              <div className="px-4 py-1 mt-4 border-2 rounded-full border-uablue-default text-uablue-default text-center text-sm">
                Crypto
              </div>
            )}
          </div>
        </section>
        </div>
      </div>
  );
}

"use client";
import Text from "@/public/content/privacy/text/Privacy";

export default function BodyOne() {
  const {
    TermsHeader,
    PrivacyHeader,
    PrivacyIntro,
  } = Text;

  const terms = [
    { title: Text.Terms1Title, content: Text.Terms1Content },
    { title: Text.Terms2Title, content: Text.Terms2Content },
    { title: Text.Terms3Title, content: Text.Terms3Content },
    { title: Text.Terms4Title, content: Text.Terms4Content },
    { title: Text.Terms5Title, content: Text.Terms5Content },
    { title: Text.Terms6Title, content: Text.Terms6Content },
    { title: Text.Terms7Title, content: Text.Terms7Content },
    { title: Text.Terms8Title, content: Text.Terms8Content },
  ];

  const privacy = [
    { title: Text.Privacy1Title, content: Text.Privacy1Content },
    { title: Text.Privacy2Title, content: Text.Privacy2Content },
    { title: Text.Privacy3Title, content: Text.Privacy3Content },
    { title: Text.Privacy4Title, content: Text.Privacy4Content },
    { title: Text.Privacy5Title, content: Text.Privacy5Content },
    { title: Text.Privacy6Title, content: Text.Privacy6Content },
    { title: Text.Privacy7Title, content: Text.Privacy7Content },
    { title: Text.Privacy8Title, content: Text.Privacy8Content },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="tw-container-responsive py-12">
        <div>
          <h1 className="mb-[0.75rem] text-4xl font-bold text-orangeOne">{TermsHeader}</h1>
          {terms.map(({ title, content }, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-semibold">{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h1 className="mb-[0.75rem] text-4xl font-bold text-orangeOne">{PrivacyHeader}</h1>
          <p className="mb-[1.5rem] text-xl font-semibold">{PrivacyIntro}</p>
          {privacy.map(({ title, content }, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-semibold">{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
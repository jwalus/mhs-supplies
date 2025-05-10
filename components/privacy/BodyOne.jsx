"use client";
import Text from "@/public/content/privacy/text/Privacy";

export default function BodyOne() {
  const {
    TermsHeader,
    Terms1Title,
    Terms1Content,
    Terms2Title,
    Terms2Content,
    Terms3Title,
    Terms3Content,
    Terms4Title,
    Terms4Content,
    Terms5Title,
    Terms5Content,
    Terms6Title,
    Terms6Content,
    Terms7Title,
    Terms7Content,
    Terms8Title,
    Terms8Content,
    PrivacyHeader,
    PrivacyIntro,
    Privacy1Title,
    Privacy1Content,
    Privacy2Title,
    Privacy2Content,
    Privacy3Title,
    Privacy3Content,
    Privacy4Title,
    Privacy4Content,
    Privacy5Title,
    Privacy5Content,
    Privacy6Title,
    Privacy6Content,
    Privacy7Title,
    Privacy7Content,
    Privacy8Title,
    Privacy8Content,
  } = Text;

  return (
    <div className="flex justify-center w-full bg-gray-200">
      <div className="w-[65%] py-12">
        <div>
          <h1>{TermsHeader}</h1>
          <h2>{Terms1Title}</h2>
          <p>{Terms1Content}</p>
          <h2>{Terms2Title}</h2>
          <p>{Terms2Content}</p>
          <h2>{Terms3Title}</h2>
          <p>{Terms3Content}</p>
          <h2>{Terms4Title}</h2>
          <p>{Terms4Content}</p>
          <h2>{Terms5Title}</h2>
          <p>{Terms5Content}</p>
          <h2>{Terms6Title}</h2>
          <p>{Terms6Content}</p>
          <h2>{Terms7Title}</h2>
          <p>{Terms7Content}</p>
          <h2>{Terms8Title}</h2>
          <p>{Terms8Content}</p>
        </div>

        <div className="mt-12">
          <h1>{PrivacyHeader}</h1>
          <p>{PrivacyIntro}</p>
          <h2>{Privacy1Title}</h2>
          <p>{Privacy1Content}</p>
          <h2>{Privacy2Title}</h2>
          <p>{Privacy2Content}</p>
          <h2>{Privacy3Title}</h2>
          <p>{Privacy3Content}</p>
          <h2>{Privacy4Title}</h2>
          <p>{Privacy4Content}</p>
          <h2>{Privacy5Title}</h2>
          <p>{Privacy5Content}</p>
          <h2>{Privacy6Title}</h2>
          <p>{Privacy6Content}</p>
          <h2>{Privacy7Title}</h2>
          <p>{Privacy7Content}</p>
          <h2>{Privacy8Title}</h2>
          <p>{Privacy8Content}</p>
        </div>
      </div>
    </div>
  );
}
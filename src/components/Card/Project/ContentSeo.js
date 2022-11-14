import React from "react";

function ContentSeo() {
  return (
    <div className="container py-16 mx-auto lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2 justify-items-center">
        <div className="max-w-xl mb-6">
          <h1 className="text-center md:text-left btn-sub-heading">
            Medical Equipment & Consumables from Athulya
          </h1>
          <p className="text-justify btn-sub-para">
            Athulya, one of the largest geriatric care providers, provides
            various services for the growing senior community. Concerned about
            the elderly we provide customized and personalized services for
            seniors. From basic care to complex care we cover all types of
            services for seniors. Not just through services but also through
            products we ensure that seniors have a comfortable life. Hospital
            like setup at your home is not something that’s impossible. With
            Athulya Senior Care you can have the hospital facilities at your
            home.
            <br />
            There is no place like home on Earth. During the difficult stages of
            life of your loved ones, they might prefer recovering in the comfort
            of home. Medical equipment available at the hospital may not be
            available at home. Therefore you might be in a situation to stay at
            the hospital for a long time. To take care of your elderly at home
            they will need medical equipment and consumables. Staying at the
            hospital just for the facilities provided there even after the
            treatment can cost you huge numbers. This cost can be cut down if
            you can have those facilities at your home right? That’s why we
            provide Medical equipment and consumables for seniors at the
            doorstep in Chennai.
          </p>
        </div>
        <div className="flex flex-col justify-items-center">
          <h1 className="text-center md:text-left btn-sub-heading ">
            Medical Equipment & Consumables at Home
          </h1>
          <div className="mb-6 ">
            <p className="text-justify btn-sub-para">
              Having Medical Equipment and consumables at home can be beneficial
              in many ways. We can’t forget the pandemic. During the pandemic,
              everyone was afraid to visit the hospital even for regular
              checkups. For times like that, it is better to have medical
              equipment at home. It will save you from facing any issues.
              Unnecessary hospital visits for vitals checking and prolonged stay
              at the hospital can come to an end. Since your seniors can stay at
              home they will also have a faster recovery.
            </p>
          </div>
          <div className="grid place-items-start">
            <img
              className="object-cover mb-6 rounded shadow-lg"
              src="https://res.cloudinary.com/drywqd3hf/image/upload/v1668233166/3375x2250_Medical_Equipment_oupeb3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSeo;

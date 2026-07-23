import Link from "next/link";

export const Philosophy = () => {
  return (
    <div className="mx-auto w-full md:max-w-2xl lg:max-w-3xl">
      <div className="flex flex-col md:flex-row">
        <h2 className="top-0 items-end pr-16 pl-8 mb-4 md:mb-12 h-max md:pr-8 md:sticky md:h-min md:items-start md:pl-0">
          <div className="pt-2 text-xl uppercase font-mont font-medium opacity-50 [grid-area:1/1/1/1] md:w-min md:pl-3 md:pb-3 md:[writing-mode:vertical-lr]">
            Philosophy
          </div>
        </h2>
        <p className="pr-4 pl-8 text-lg md:text-justify md:pl-0 md:text-base lg:pr-12">
        Coming from a scientific and medical background, I enjoy absorbing information and naturally gravitate toward becoming a product expert. I am comfortable in fast-paced, ambiguous environments where I can be fluid and take on whatever role is needed. When I spot a gap in the product, I take ownership of the problem and work to close it. I champion for authenticity, positivity, empathy, and being helpful in all interactions. I believe connection is the purpose of life and genuine relationships are the foundation of a healthy and productive company culture.
        </p>
      </div>
    </div>
  );
};

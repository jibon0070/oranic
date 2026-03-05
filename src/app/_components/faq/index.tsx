"use client";

import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes your skincare different from others?",
    answer:
      "Our approach combines expert botanical research, safe cold-press technology, and personalized organic treatments to deliver lasting, natural results without harsh chemicals.",
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer:
      "Yes, all our formulas are dermatologically tested and specifically designed to be gentle on sensitive skin, utilizing soothing ingredients like chamomile and organic aloe vera.",
  },
  {
    question: "How long does it take to see visible results?",
    answer:
      "While many customers notice a glow after the first use, significant improvements in skin texture and tone typically appear after 4 to 6 weeks of consistent daily application.",
  },
  {
    question: "Do you use any synthetic fragrances or dyes?",
    answer:
      "Never. We believe in the power of nature, which is why all our scents and colors are derived directly from the organic plants and essential oils used in our formulations.",
  },
  {
    question: "Are your products cruelty-free and vegan?",
    answer:
      "Absolutely. We are committed to ethical beauty. All our products are 100% cruelty-free, vegan-certified, and never tested on animals at any stage of production.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Content */}
        <div className="flex-1 w-full lg:max-w-[600px]">
          <h2 className="text-h4 lg:text-h3 font-medium mb-6">
            We&apos;ve got the answers you need
          </h2>
          <p className="text-muted-foreground text-body-2 mb-10 max-w-[500px]">
            Have questions about our organic formulations or your skincare
            journey? We&apos;ve compiled the most common inquiries to help you
            achieve your most radiant, natural glow.
          </p>

          <Accordion className="gap-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={item.question}
                activeClassName="bg-background p-6"
                inactiveClassName="bg-transparent py-4 px-4"
              >
                <p className="text-muted-foreground text-body-3 leading-relaxed max-w-[480px]">
                  {item.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-end">
          <div className="relative w-full aspect-[4/5] lg:max-w-[560px]">
            <Image
              src="/images/faq.png"
              alt="Oranic Skincare Products in Nature"
              fill
              className="object-cover rounded-[48px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

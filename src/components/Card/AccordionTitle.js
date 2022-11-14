import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function AccordionTitle() {
  return (
    <div className="container mx-auto">
      <div class="flex flex-col mb-16 sm:text-center">
        <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Frequently Asked Questions:
          </h2>
        </div>
      </div>
      <div className="border-4 border-collapse border-pink-500 border-spacing-3 bottom-3 rounded-3xl">
        <Accordion>
          <div className="bg-slate-200 rounded-t-3xl">
            <AccordionItem>
              <h2>
                <div className="py-5 ">
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      <h1 className=" btn-sub-heading">
                        1. How can you book medical equipment and consumables?
                      </h1>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </div>
              </h2>
              <AccordionPanel pb={4}>
                <p className="p-6 text-center bg-slate-100 btn-sub-para rounded-b-3xl">
                  If you are looking to book medical equipment or consumables,
                  you can either visit the medical equipment and consumable page
                  on our home care website and fill in the details in the box at
                  the bottom of the page, following which you will receive a
                  follow-up call from our team to know more about your senior’s
                  requirement. Or call us directly on 098849 45900 and tell us
                  your requirements and book the necessary medical equipment or
                  consumables.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <hr class=" h-px bg-sky-900 border-0 "></hr>
          </div>
          <div className="bg-slate-200 ">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="center">
                    <div className="py-5 btn-sub-heading ">
                      2. Is there a rental option?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="p-6 text-center bg-slate-100 btn-sub-para rounded-b-3xl">
                  Yes. Based on your requirement you can choose between purchase
                  or rental option. You can rent the equipment without any
                  caution deposit. In case of any damage, you won’t be charged
                  for the damage as well.
                  <br />
                </p>
              </AccordionPanel>
            </AccordionItem>
            <hr class=" h-px bg-sky-900 border-0 "></hr>
          </div>

          <div className="bg-slate-200">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="2" textAlign="center">
                    <div className="py-5 btn-sub-heading">
                      3. Why do you need medical equipment and consumables at
                      home?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="p-6 text-center bg-slate-100 btn-sub-para rounded-b-3xl">
                  By having the medical equipment at home you can avoid frequent
                  visits or prolonged stays at hospitals for your seniors. They
                  can stay in the comfort of their home and recover with the
                  help of the top-quality medical equipment and consumables
                  provided by Athulya Senior Care. You can also order medical
                  equipment and consumables without having any doubts about the
                  quality or the reliability of the products.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <hr class=" h-px bg-sky-900 border-0 "></hr>
          </div>
          <div className="bg-slate-200 ">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="2" textAlign="center">
                    <div className="py-5 bg-slate-200 btn-sub-heading rounded-b-3xl">
                      4. Are medical equipment and consumables from Athulya
                      cost-effective?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="p-6 text-center bg-slate-100 btn-sub-para rounded-b-3xl">
                  Yes. Athulya’s medical equipment and consumables from Athulya
                  are of top quality and cost-effective.
                </p>
              </AccordionPanel>
            </AccordionItem>
            <hr class=" h-px bg-sky-900 border-0 "></hr>
          </div>
          <div className="bg-slate-200 rounded-b-3xl">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="2" textAlign="center">
                    <div className="py-5 bg-slate-200 btn-sub-heading rounded-b-3xl">
                      5. What are the other home healthcare services provided by
                      Athulya Senior Care?
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className="p-6 text-center bg-slate-100 btn-sub-para rounded-b-3xl">
                  l Doctor Visits to the Home l Geriatric Counseling l Critical
                  Care at Home l Nursing Services l Physiotherapy at Home l Home
                  Blood Collection l Medicine Delivery at Home l Non-Emergency
                  Ambulances l Medical Equipment and Consumables
                </p>
              </AccordionPanel>
            </AccordionItem>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionTitle;

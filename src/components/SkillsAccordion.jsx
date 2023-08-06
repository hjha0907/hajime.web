import React from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

  const SkillsAccordion = () => {
      return (
        <> 
        <div id="skills" />
          <Accordion className="w-[90%] sm:w-[55%] mx-auto bg-gray-100 mt-12 pt-2 pb-10 px-7 rounded-xl">
          <p className='my-8 text-center text-2xl font-bold'><i class="fa-solid fa-pencil"></i> Skills</p>
            <AccordionItem className="">
                <AccordionHeader className="w-full">
                    <h1 className={`accordion-title`}>
                    <div className="text-2xl py-2 rounded-xl space-x-8 bg-gradient-to-b from-yellow-300 to-yellow-200 drop-shadow-lg">
                        <i class="fa-solid fa-layer-group"></i> Web Design <i class="fa-solid fa-chevron-down"></i>
                        <p className="text-[0.65rem] text-gray-700 font-bold pr-8">ウェブデザインで使用するソフト</p>
                    </div>
                    </h1>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    <div className="w-[80%] mx-auto">
                        <p className="pt-4">Illustrater<h2 className="text-xs text-right text-gray-600">80%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[80%]"></div></div>
                        <p className="pt-4">Photoshop<h2 className="text-xs text-right text-gray-600">80%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[80%]"></div></div>
                        <p className="pt-4">Figma<h2 className="text-xs text-right text-gray-600">50%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[50%]"></div></div>
                    </div>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem className="">
            <AccordionHeader className="pt-10 w-full">
                    <h1 className={`accordion-title`}>
                    <div className="text-2xl py-2 rounded-xl space-x-8 bg-gradient-to-b from-yellow-300 to-yellow-200 drop-shadow-lg">
                    <i class="fa-solid fa-code"></i> Coding <i class="fa-solid fa-chevron-down"></i>
                    <p className=" text-[0.65rem] text-gray-700 font-bold pr-8">コーディングで使用するソフト</p>
                    </div>
                    </h1>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    <div className="w-[80%] mx-auto">
                    <p className="pt-4">Html5<h2 className="text-xs text-right text-gray-600">90%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[90%]"></div></div>
                    <p className="pt-4">Css3<h2 className="text-xs text-right text-gray-600">90%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[90%]"></div></div>
                    <p className="pt-4">Javascript<h2 className="text-xs text-right text-gray-600">70%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[70%]"></div></div>
                    <p className="pt-4">React<h2 className="text-xs text-right text-gray-600">60%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[60%]"></div></div>
                    <p className="pt-4">Wordpress<h2 className="text-xs text-right text-gray-600">70%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[70%]"></div></div>
                    </div>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem className="">
            <AccordionHeader className="pt-10 w-full">
                    <h1 className={`accordion-title`}>
                    <div className="text-2xl py-2 rounded-xl space-x-8 bg-gradient-to-b from-yellow-300 to-yellow-200 drop-shadow-lg">
                    <i class="fa-solid fa-camera-retro"></i> Photograph <i class="fa-solid fa-chevron-down"></i>
                    <p className=" text-[0.65rem] text-gray-700 font-bold pr-8">フォトグラフで使用するソフト</p>
                    </div>
                    </h1>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    <div className="w-[80%] mx-auto">
                    <p className="pt-4">Photoshop<h2 className="text-xs text-right text-gray-600">90%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[90%]"></div></div>
                    <p className="pt-4">Lightroom<h2 className="text-xs text-right text-gray-600">90%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[90%]"></div></div>
                    <p className="pt-4">Bridge<h2 className="text-xs text-right text-gray-600">90%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[90%]"></div></div>
                    </div>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem className="">
            <AccordionHeader className="pt-10 w-full ">
                    <h1 className={`accordion-title`}>
                    <div className="text-2xl py-2 rounded-xl space-x-8 bg-gradient-to-b from-yellow-300 to-yellow-200 drop-shadow-lg">
                    <i class="fa-solid fa-video"></i> Videograph <i class="fa-solid fa-chevron-down"></i>
                    <p className=" text-[0.65rem] text-gray-700 font-bold pr-8">映像制作で使用するソフト</p>
                    </div>
                    </h1>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    <div className="w-[80%] mx-auto">
                    <p className="pt-4">Davinciresolve 18<h2 className="text-xs text-right text-gray-600">50%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[50%]"></div></div>
                    <p className="pt-4">Premiere<h2 className="text-xs text-right text-gray-600">70%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[70%]"></div></div>
                    </div>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem className="">
            <AccordionHeader className="pt-10 w-full">
                    <h1 className={`accordion-title`}>
                    <div className="text-2xl py-2 rounded-xl space-x-8 bg-gradient-to-b from-yellow-300 to-yellow-200 drop-shadow-lg">
                    <i class="fa-solid fa-pen-nib"></i> Illustration <i class="fa-solid fa-chevron-down"></i>
                    <p className=" text-[0.65rem] text-gray-700 font-bold pr-8">イラスト制作で使用するソフト</p>
                    </div>
                    </h1>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                    <div className="w-[80%] mx-auto">
                    <p className="pt-4">Photoshop<h2 className="text-xs text-right text-gray-600">50%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[50%]"></div></div>
                    <p className="pt-4">Clip studio<h2 className="text-xs text-right text-gray-600">50%</h2></p><div className="bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full w-[50%]"></div></div>
                    </div>
                    </div>
                </AccordionBody>
            </AccordionItem>
          </Accordion>
          </>

      );
  };
  
  export default SkillsAccordion;
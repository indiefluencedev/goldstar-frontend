import React from 'react';

const Catagoryfooter = ({ seriesName }) => {
    const footerContent = {
        lockstitch: {
            title: 'Lockstitch',
            description: 'The new line of Lockstitch Goldstar has a good-looking design accompanied by automatisms that shorten and simplify the sewing process considerably. Our machines all have an integrated low-consumption motor in respect of the environment (eco) and to lower maintenance costs. We have also added the voice function that allows you to learn how to use all the keys and all the functions because ease of use is our goal. Although they are computerized machines you do not have to be afraid of making mistakes thanks to the reset button with a single touch you can return to the factory settings or to those saved by the user.'
        },
        overlock: {
            title: 'Overlock',
            description: 'Goldstar Overlock machines are extremely easy to use thanks to the automation brought through the voice guide that explains how to solve each problem and error. Furthermore, on some models there are photocells that allow you to sew completely automatically without even pressing the pedal: the machine takes care of it, all the operator has to do is bring the fabric closer.'
        },
        interlock: {
            title: 'Interlock',
            description: 'Even in the interlock stitch machines we have maintained our high standards of automation and energy saving: the integrated motor that allows needle positioning, the automatic thread trimmer above / below and voice guidance. We have also implemented a high efficiency oil recovery system to avoid staining the fabrics, which combined with the air blowing system eliminates all the dust of sewing waste.'
        },
        heavyduty: {
            title: 'Heavy-Duty',
            description: 'In this section you can find all the Lockstitches suitable for heavy processing such as leather, in fact they will be equipped with top feed or triple transport with the most innovative technologies: computerized talking machines, one-button quick reset, LED light, built-in 750W motor, large workspace and devices such as thread trimmer, bartack and integrated presser foot lifter.'
        },

        specialseries: {
            title: 'Special-Series',
            description: 'You can find different types of special machines for sewing various types of fabric from light, medium to hard. Automated machines are intuitive to use, which significantly shortens and simplifies the sewing process. With a great variety of settings that allows you to control every operation while remaining extremely simple to use and set thanks to the loudspeaker that makes them "talking machines".'
        },
    
        heattransfer:{
             title: 'Heat-Transfer',
            description: "An automatic constant temperature system ensures flexible pressure adjustment and reliable performance. It features electronic time control and process completion indicators, and is designed ergonomically to ensure simple operation and uniform pressure distribution.Features an electronic digital display for temperature control with an accuracy of (±2°C) and includes a fine-tuning knob. Utilizes the fever aluminum casting thermal conductivity principle where the radiation pipe and hot plate are integrated, ensuring temperature uniformity, a small temperature coefficient, and energy efficiency. It is particularly suitable for making medals, badges, and fashion T-shirts to ensure economy and practicability"
        },
    
        needledetector:{
            title: 'Needle-Detector',
           description: " Features high detection sensitivity, superior anti-interference capability, and stable performance. It incorporates an American RISC high-performance chip for intelligent and accurate display of the broken needle position, making it easy to locate. The function keys integrate the machine's entire menu, enhancing signal data calculation and ensuring flexible, convenient operation. It uses infrared photoelectric technology to memorize needle detection data, achieving 100% accuracy. Additionally, the machine automatically shuts off after 10 minutes of no-load operation, saving electricity and enhancing safety"
       },

       zigzag:{
        title: 'Zig-Zag',
       description: "The new line of Goldstar Zig-Zag machines has an innovative, good-looking design accompanied by automatism that greatly shortens and simplifies the sewing process. Our machines all have an integrated low-consumption motor in respect of the environment (eco) and to lower maintenance costs. We firmly believe in technological innovation and therefore on our machines you will find new technologies such as silent stepper motors that control new functions using digital buttons or touch panels"
   },

   cuttingseries:{
    title: 'Cutting Series',
   description:"Cutting-edge precision for every fabric: From the dedicated garment industry tool with specialized features like concentrated lubrication, small curvilinear cutting, and automatic knife grinding, to the versatile tool tailored for high-efficiency binding in materials ranging from cotton to polyester. Equipped with adjustable speeds and an automatic stop device, these cutting series machines ensure neat sections and superior accuracy across a spectrum of textiles, enhancing productivity in every cut."
},

cuttingmachine:{
    title: 'Cutting Machine Seris',
   description:"Precision meets versatility in our cutting machine series, designed to handle a wide array of materials and products. From delicate fabrics like cotton and silk to tougher materials like leather and fur, our machines deliver clean, precise cuts. Ideal for industries ranging from fashion and textiles to accessories and specialty items such as umbrellas and schoolbags. Whether crafting intricate children's wear, customizing T-shirts, or producing durable luggage, our cutting machines ensure high efficiency and exceptional accuracy, catering to both large enterprises and individual artisans."

},

fusingmachine:{
    title: 'Fusing Seris',
   description:"Equipped with a Belt Warping Prevention system using direct limit switches for both upper and lower belts. It features a rubber driving roller for non-slip driving and a one-side open design, allowing for the fusing of larger fabric widths than the belt and edge fusing without the need for full-surface thermal processing. The new body design reduces heat impact on electrical components, enhancing their durability. Additionally, the MS model comes standard with a rotary strip-off device."

},
    };

    const content = footerContent[seriesName.toLowerCase()] || {
        title: 'Series',
        description: 'Description not available for this series.'
    };

    return (
        <div className='container max-w-[1300px] my-7 bg-white mx-auto p-10'>
            <h3 className='text-prime text-[28px] my-3'>{content.title}</h3>
            <hr className='border border-prime' />
            <p className='font-assistant my-3'>
                {content.description}
            </p>
        </div>
    );
};

export default Catagoryfooter;

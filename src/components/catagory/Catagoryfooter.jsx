import React from 'react';

const Catagoryfooter = ({ seriesName }) => {
    const footerContent = {
        lockstitch: {
            title: 'Lockstitch Series',
            description: "The new line of Lockstitch Goldstar machines features an attractive design accompanied by automation that significantly shortens and simplifies the sewing process. All our machines are equipped with an integrated low-consumption motor, which is environment friendly (eco) and helps reduce maintenance costs. We have also added a voice function that guides you through using all the keys and features, making ease of use our top priority. Although these are computerized machines, there's no need to worry about making mistakes—thanks to the reset button, you can return to factory settings or your saved preferences with a single touch."
        },
        overlock: {
            title: 'Overlock Series',
            description: "Goldstar Overlock machines are extremely user-friendly, thanks to the voice-guided automation that explains how to resolve any issues or errors. Additionally, some models are equipped with photocells that enable fully automatic sewing without the need to press the pedal—the machine handles everything, and the operator simply needs to bring the fabric close."
        },
        interlock: {
            title: 'Interlock Series',
            description: " In our interlock stitch machines, we have upheld our high standards of automation and energy efficiency. These machines feature an integrated motor that enables precise needle positioning, an automatic thread trimmer for both the upper and lower threads, and voice guidance. Additionally, we have implemented a high-efficiency oil recovery system to prevent fabric staining. Combined with the air-blowing system, this innovation effectively eliminates all sewing waste and dust."
        },
        heavyduty: {
            title: 'Heavy-Duty Series',
            description: "In this section, you'll find Lockstitch machines specifically designed for heavy-duty tasks like leatherwork. These machines come equipped with top feed or triple transport systems and the latest innovations, including computerized voice-guided operation, a one-touch quick reset button, LED lighting, a built-in 750W motor, a spacious work area, and features like a thread trimmer, bartack function, and integrated presser foot lifter."
        },

        specialseries: {
            title: 'Special-Series',
            description: "This section includes a range of specialized machines designed for sewing various types of fabric, from light to medium to heavy. These automated machines are intuitive, greatly reducing and simplifying the sewing process. They provide a diverse range of settings that give you complete control over every operation, yet remain incredibly easy to operate and adjust, thanks to the integrated speaker."
        },
    
        heattransfer:{
             title: 'Heat-Transfer Series',
            description: "The Heat transfer series have an automatic constant temperature system that provides flexible pressure adjustment and dependable performance. The system includes electronic time control and process completion indicators, all designed ergonomically for ease of use and even pressure distribution. It features an electronic digital display for precise temperature control with an accuracy of (±2°C) and includes a fine-tuning knob. The machine employs the fever aluminum casting thermal conductivity principle, where the radiation pipe and hot plate are integrated, ensuring uniform temperature, a low temperature coefficient, and energy efficiency. This system is particularly well-suited for producing medals, badges, and fashion T-shirts, offering both economy and practicality."
        },
    
        needledetector:{
            title: 'Needle-Detector Series',
           description: " Features high detection sensitivity, superior anti-interference capability, and stable performance. It incorporates an American RISC high-performance chip for intelligent and accurate display of the broken needle position, making it easy to locate. The function keys integrate the machine's entire menu, enhancing signal data calculation and ensuring flexible, convenient operation. It uses infrared photoelectric technology to memorize needle detection data, achieving 100% accuracy. Additionally, the machine automatically shuts off after 10 minutes of no-load operation, saving electricity and enhancing safety"
       },

       zigzag:{
        title: 'Zig-Zag Series',
       description: "The new line of Goldstar Zig-Zag machines features an innovative and attractive design, complemented by automation that significantly shortens and simplifies the sewing process. All our machines are equipped with an eco-friendly, low-consumption motor to reduce environmental impact and maintenance costs. Committed to technological advancement, we've incorporated cutting-edge features such as silent stepper motors, which control new functions through digital buttons or touch panels."
   },

   cuttingseries:{
    title: 'Cutting Series',
   description:"Experience cutting-edge precision for every fabric: Our cutting machines, designed specifically for the garment industry, boast specialized features such as concentrated lubrication, precise curvilinear cutting, and automatic knife grinding. These versatile tools are perfect for high-efficiency binding in materials ranging from cotton to polyester. With adjustable speeds and an automatic stop device, these machines guarantee clean cuts and superior accuracy across a wide range of textiles, significantly boosting productivity."
},
fusingmachine:{
    title: 'Fusing Series',
   description:" Equipped with a Belt Warping Prevention system utilizing direct limit switches for both the upper and lower belts, this machine features a rubber driving roller to ensure non-slip operation. Its one-sided open design that allows for the fusing of fabric widths larger than the belt and edge fusing without requiring full-surface thermal processing. The newly designed body minimizes heat impact on electrical components, thereby improving their durability. Additionally, the MS model is equipped with a standard rotary strip-off device."

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

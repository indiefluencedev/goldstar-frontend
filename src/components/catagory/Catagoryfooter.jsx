import React from 'react';
import { useTranslation } from 'react-i18next';

const footerContent = {
  lockstitch: {
    title: {
      en: "Lockstitch Series",
      cn:"锁缝系列",
      ko: "록스티치 시리즈"
    },
    description: {
      en: "The new line of Lockstitch Goldstar machines features an attractive design accompanied by automation that significantly shortens and simplifies the sewing process. All our machines are equipped with an integrated low-consumption motor, which is environment friendly (eco) and helps reduce maintenance costs. We have also added a voice function that guides you through using all the keys and features, making ease of use our top priority. Although these are computerized machines, there's no need to worry about making mistakes—thanks to the reset button, you can return to factory settings or your saved preferences with a single touch.",
      cn:"新的锁缝金星机器系列具有吸引人的设计，并配备了自动化功能，大大缩短和简化了缝纫过程。所有我们的机器都配备了集成的低功耗电机，环保（生态）并有助于降低维护成本。我们还增加了语音功能，引导您使用所有按键和功能，使使用变得极为简单。虽然这些是计算机化的机器，但无需担心出错——由于有重置按钮，您可以一键恢复出厂设置或保存的首选项。",
      ko: "새로운 록스티치 골드스타 기계 라인은 매력적인 디자인과 함께 자동화 기능을 갖추고 있어 재봉 과정을 크게 단축하고 간소화합니다. 모든 기계는 통합된 저소비 모터를 장착하여 친환경적이며 유지 관리 비용을 줄이는 데 도움이 됩니다. 또한 모든 키와 기능을 사용하는 방법을 안내하는 음성 기능을 추가하여 사용 편의성을 최우선으로 삼았습니다. 이들은 컴퓨터화된 기계이지만 실수를 걱정할 필요가 없습니다. 리셋 버튼 덕분에 공장 설정이나 저장된 설정으로 한 번의 터치로 돌아갈 수 있습니다."
    }
  },
  overlock: {
    title: {
      en: "Overlock Series",
      cn:"包缝系列",
      ko: "오버록 시리즈"
    },
    description: {
      en: "Goldstar Overlock machines are extremely user-friendly, thanks to the voice-guided automation that explains how to resolve any issues or errors. Additionally, some models are equipped with photocells that enable fully automatic sewing without the need to press the pedal—the machine handles everything, and the operator simply needs to bring the fabric close.",
      cn:"金星包缝机非常用户友好，得益于语音引导的自动化，它会解释如何解决任何问题或错误。此外，一些型号配备了光电传感器，可以实现全自动缝纫，无需踩踏板——机器处理一切，操作员只需将织物靠近即可。",
      ko: "골드스타 오버록 기계는 매우 사용자 친화적이며, 음성 안내 자동화를 통해 문제나 오류를 해결하는 방법을 설명합니다. 또한 일부 모델에는 광전지가 장착되어 있어 페달을 밟지 않아도 완전 자동 재봉이 가능하며, 기계가 모든 작업을 처리하고 운영자는 단순히 천을 가까이 가져오기만 하면 됩니다."
    }
  },
  interlock: {
    title: {
      en: "Interlock Series",
      cn:"套缝系列",
      ko: "인터록 시리즈"
    },
    description: {
      en: "In our interlock stitch machines, we have upheld our high standards of automation and energy efficiency. These machines feature an integrated motor that enables precise needle positioning, an automatic thread trimmer for both the upper and lower threads, and voice guidance. Additionally, we have implemented a high-efficiency oil recovery system to prevent fabric staining. Combined with the air-blowing system, this innovation effectively eliminates all sewing waste and dust.",
      cn:"在我们的套缝机中，我们保持了高标准的自动化和能源效率。这些机器配备了集成电机，可以精确定位针脚，并自动修剪上下线，还有语音引导。此外，我们还实施了高效的油回收系统，防止织物染污。结合空气吹系统，这项创新有效地消除了所有缝纫废物和灰尘。",
      ko: "우리의 인터록 스티치 기계에서는 자동화 및 에너지 효율성에 대한 높은 기준을 유지했습니다. 이 기계는 정밀한 바늘 위치 조정을 가능하게 하는 통합 모터, 상하실 자동 실커터 및 음성 안내 기능을 갖추고 있습니다. 또한, 고효율 오일 회수 시스템을 구현하여 직물 얼룩을 방지했습니다. 공기 송풍 시스템과 결합된 이 혁신은 모든 재봉 폐기물과 먼지를 효과적으로 제거합니다."
    }
  },
  heavyduty: {
    title: {
      en: "Heavy-Duty Series",
      cn:"重型系列",
      ko: "헤비듀티 시리즈"
    },
    description: {
      en: "In this section, you'll find Lockstitch machines specifically designed for heavy-duty tasks like leatherwork. These machines come equipped with top feed or triple transport systems and the latest innovations, including computerized voice-guided operation, a one-touch quick reset button, LED lighting, a built-in 750W motor, a spacious work area, and features like a thread trimmer, bartack function, and integrated presser foot lifter.",
      cn:"在本部分中，您会找到专为重型任务（如皮革加工）设计的锁缝机。这些机器配备了顶送或三重运输系统和最新的创新技术，包括计算机化语音引导操作、一键快速重置按钮、LED照明、内置750W电机、宽敞的工作区域，以及线修剪器、回针功能和集成压脚升降器等功能。",
      ko: "이 섹션에서는 가죽 작업과 같은 중량 작업을 위해 특별히 설계된 록스티치 기계를 찾을 수 있습니다. 이러한 기계는 상부 피드 또는 삼중 운송 시스템과 컴퓨터화된 음성 안내 작동, 원터치 퀵 리셋 버튼, LED 조명, 내장 750W 모터, 넓은 작업 공간, 실커터, 바텍 기능 및 통합 프레서 발 리프터와 같은 최신 혁신 기능을 갖추고 있습니다."
    }
  },
  specialseries: {
    title: {
      en: "Special-Series",
      cn:"特殊系列",
      ko: "특수 시리즈"
    },
    description: {
      en: "This section includes a range of specialized machines designed for sewing various types of fabric, from light to medium to heavy. These automated machines are intuitive, greatly reducing and simplifying the sewing process. They provide a diverse range of settings that give you complete control over every operation, yet remain incredibly easy to operate and adjust, thanks to the integrated speaker.",
      cn:"本部分包括一系列专门设计的机器，用于缝制各种类型的面料，从轻型到中型到重型。这些自动化机器直观操作，大大减少和简化了缝纫过程。它们提供了多种设置，使您能够完全控制每个操作，但由于集成了扬声器，仍然非常容易操作和调整。",
      ko: "이 섹션에는 경량에서 중량에 이르기까지 다양한 유형의 직물을 재봉하도록 설계된 다양한 특수 기계가 포함되어 있습니다. 이러한 자동화된 기계는 직관적이어서 재봉 과정을 크게 줄이고 간소화합니다. 이러한 기계는 다양한 설정을 제공하여 모든 작업에 대한 완벽한 제어를 가능하게 하며, 통합 스피커 덕분에 여전히 매우 쉽게 조작하고 조정할 수 있습니다."
    }
  },
  heattransfer: {
    title: {
      en: "Heat-Transfer Series",
      cn:"热转印系列",
      ko: "열전사 시리즈"
    },
    description: {
      en: "The Heat transfer series have an automatic constant temperature system that provides flexible pressure adjustment and dependable performance. The system includes electronic time control and process completion indicators, all designed ergonomically for ease of use and even pressure distribution. It features an electronic digital display for precise temperature control with an accuracy of (±2°C) and includes a fine-tuning knob. The machine employs the fever aluminum casting thermal conductivity principle, where the radiation pipe and hot plate are integrated, ensuring uniform temperature, a low temperature coefficient, and energy efficiency. This system is particularly well-suited for producing medals, badges, and fashion T-shirts, offering both economy and practicality.",
      cn:"热转印系列具有自动恒温系统，可灵活调节压力并提供可靠的性能。该系统包括电子时间控制和过程完成指示器，所有设计都符合人体工学，便于使用和均匀压力分布。它具有电子数字显示屏，用于精确控制温度，精度为（±2°C），并包括微调旋钮。该机器采用铝铸热导率原理，将辐射管和热板集成在一起，确保温度均匀、温度系数低且能效高。该系统特别适合生产奖章、徽章和时尚T恤，兼具经济性和实用性。",
      ko: "열전사 시리즈는 유연한 압력 조정 및 안정적인 성능을 제공하는 자동 상온 유지 시스템을 갖추고 있습니다. 이 시스템에는 전자 시간 제어 및 공정 완료 지시기가 포함되어 있으며, 모두 사용의 편의성과 고른 압력 분포를 위해 인체 공학적으로 설계되었습니다. (±2°C)의 정확도로 정밀한 온도 제어를 위한 전자 디지털 디스플레이가 특징이며, 미세 조정 손잡이가 포함되어 있습니다. 이 기계는 복사관과 핫 플레이트가 통합된 열전도 원리를 채택하여 온도 균일성, 낮은 온도 계수 및 에너지 효율성을 보장합니다. 이 시스템은 특히 메달, 배지 및 패션 티셔츠를 생산하는 데 적합하며 경제성과 실용성을 제공합니다."
    }
  },
  needledetector: {
    title: {
      en: "Needle-Detector Series",
      cn:"针探测器系列",
      ko: "니들 디텍터 시리즈"
    },
    description: {
      en: "Features high detection sensitivity, superior anti-interference capability, and stable performance. It incorporates an American RISC high-performance chip for intelligent and accurate display of the broken needle position, making it easy to locate. The function keys integrate the machine's entire menu, enhancing signal data calculation and ensuring flexible, convenient operation. It uses infrared photoelectric technology to memorize needle detection data, achieving 100% accuracy. Additionally, the machine automatically shuts off after 10 minutes of no-load operation, saving electricity and enhancing safety.",
      cn:"具有高检测灵敏度、卓越的抗干扰能力和稳定的性能。它采用美国RISC高性能芯片，智能、准确地显示断针位置，使其易于定位。功能键集成了机器的整个菜单，增强了信号数据计算，确保操作灵活、方便。它使用红外光电技术来记忆针检测数据，达到100%的准确性。此外，机器在无负载运行10分钟后自动关闭，节约用电并提高安全性。",
      ko: "높은 감지 민감도, 뛰어난 방해 방지 기능 및 안정적인 성능이 특징입니다. 지능적이고 정확한 부러진 바늘 위치 표시를 위한 미국 RISC 고성능 칩을 통합하여 위치를 쉽게 찾을 수 있습니다. 기능 키는 기계의 전체 메뉴를 통합하여 신호 데이터 계산을 향상시키고 유연하고 편리한 작업을 보장합니다. 적외선 광전 기술을 사용하여 바늘 탐지 데이터를 기억하고 100% 정확도를 달성합니다. 또한 기계는 무부하 상태로 10분 동안 작동 후 자동으로 꺼져 전기를 절약하고 안전성을 향상시킵니다."
    }
  },
  zigzag: {
    title: {
      en: "Zig-Zag Series",
      cn:"曲折缝系列",
      ko: "지그재그 시리즈"
    },
    description: {
      en: "The new line of Goldstar Zig-Zag machines features an innovative and attractive design, complemented by automation that significantly shortens and simplifies the sewing process. All our machines are equipped with an eco-friendly, low-consumption motor to reduce environmental impact and maintenance costs. Committed to technological advancement, we've incorporated cutting-edge features such as silent stepper motors, which control new functions through digital buttons or touch panels.",
      cn:"新的金星曲折缝机器系列具有创新且吸引人的设计，并配备了自动化功能，大大缩短和简化了缝纫过程。我们所有的机器都配备了环保、低功耗电机，以减少环境影响和维护成本。我们致力于技术进步，已采用尖端功能，如通过数字按钮或触摸面板控制新功能的静音步进电机。",
      ko: "새로운 골드스타 지그재그 기계 라인은 혁신적이고 매력적인 디자인을 특징으로 하며, 재봉 과정을 크게 단축하고 간소화하는 자동화 기능이 추가되었습니다. 모든 기계는 환경 영향을 줄이고 유지 보수 비용을 줄이기 위해 친환경적이고 저소비 모터로 장착되어 있습니다. 기술 발전에 전념하여 디지털 버튼 또는 터치 패널을 통해 새로운 기능을 제어하는 조용한 스테퍼 모터와 같은 최첨단 기능을 통합했습니다."
    }
  },
  cuttingseries: {
    title: {
      en: "Cutting Series",
      cn:"切割系列",
      ko: "컷팅 시리즈"
    },
    description: {
      en: "Experience cutting-edge precision for every fabric: Our cutting machines, designed specifically for the garment industry, boast specialized features such as concentrated lubrication, precise curvilinear cutting, and automatic knife grinding. These versatile tools are perfect for high-efficiency binding in materials ranging from cotton to polyester. With adjustable speeds and an automatic stop device, these machines guarantee clean cuts and superior accuracy across a wide range of textiles, significantly boosting productivity.",
      cn:"体验每种织物的尖端精度：我们的切割机专为服装行业设计，拥有专门的功能，如集中润滑、精确的曲线切割和自动磨刀。这些多功能工具非常适合从棉花到聚酯材料的高效装订。通过可调节速度和自动停止装置，这些机器确保清洁切割和在广泛的纺织品上的卓越精度，显著提高生产率。",
      ko: "모든 직물에 대한 최첨단 정밀도를 경험하십시오: 의류 산업을 위해 특별히 설계된 당사의 커팅 기계는 집중 윤활, 정밀한 곡선 절단 및 자동 칼 연마와 같은 전문 기능을 자랑합니다. 이 다용도 도구는 면에서 폴리에스터에 이르기까지 다양한 소재에서 고효율 바인딩에 완벽합니다. 조절 가능한 속도와 자동 정지 장치로 이러한 기계는 넓은 범위의 섬유에 걸쳐 깨끗한 절단과 우수한 정확도를 보장하여 생산성을 크게 향상시킵니다."
    }
  },
  fusingmachine: {
    title: {
      en: "Fusing Series",
      cn:"熔接系列",
      ko: "퓨징 시리즈"
    },
    description: {
      en: "Equipped with a Belt Warping Prevention system utilizing direct limit switches for both the upper and lower belts, this machine features a rubber driving roller to ensure non-slip operation. Its one-sided open design allows for the fusing of fabric widths larger than the belt and edge fusing without requiring full-surface thermal processing. The newly designed body minimizes heat impact on electrical components, thereby improving their durability. Additionally, the MS model is equipped with a standard rotary strip-off device.",
      cn:"配备了使用上下皮带的直接限位开关的皮带变形防止系统，该机器配有橡胶驱动辊，以确保防滑操作。其单面开放设计允许熔接大于皮带宽度的织物宽度和边缘熔接，而无需全表面热处理。新设计的机身将热量对电气组件的影响降到最低，从而提高了它们的耐用性。此外，MS型号配备了标准旋转剥离装置。",
      ko: "상하 벨트에 대해 직접 리미트 스위치를 사용하는 벨트 변형 방지 시스템이 장착된 이 기계는 미끄럼 방지 작동을 보장하는 고무 구동 롤러를 특징으로 합니다. 일면 개방형 설계는 전체 표면 열처리를 요구하지 않고도 벨트보다 큰 직물 폭의 융합과 가장자리 융합을 허용합니다. 새롭게 디자인된 바디는 전기 부품에 미치는 열 영향을 최소화하여 내구성을 향상시킵니다. 또한, MS 모델은 표준 회전 스트립 오프 장치가 장착되어 있습니다."
    }
  }
};

const Catagoryfooter = ({ seriesName }) => {
    const { i18n } = useTranslation();

    const getCurrentLanguage = () => i18n.language || window.localStorage.i18nextLng || 'en';

    const content = footerContent[seriesName.toLowerCase()] || {
        title: {
            [getCurrentLanguage()]: 'Series'
        },
        description: {
            [getCurrentLanguage()]: 'Description not available for this series.'
        }
    };

    return (
        <div className='container max-w-[1300px] my-7 bg-white mx-auto p-10'>
            <h3 className='text-prime text-[28px] my-3'>{content.title[getCurrentLanguage()]}</h3>
            <hr className='border border-prime' />
            <p className='font-assistant my-3'>
                {content.description[getCurrentLanguage()]}
            </p>
        </div>
    );
};

export default Catagoryfooter;

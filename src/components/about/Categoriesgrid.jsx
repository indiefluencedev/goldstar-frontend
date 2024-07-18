import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { getSeries } from '../../services/api';
import LazyLoad from 'react-lazyload';
import lockstitchImage from '../../assets/svg/Lock.svg';
import overlockImage from '../../assets/svg/Overlock.svg';
import interlockImage from '../../assets/svg/Interlock.svg';
import heavyDutyImage from '../../assets/svg/HeavyDuty.svg';
import specialImage from '../../assets/svg/Special.svg';
import zigzagImage from '../../assets/svg/Zigzag.svg';
import cuttingImage from '../../assets/svg/Cutting.svg';
import Cuttingmachine from '../../assets/png/cuttingmachineseries.png';
import Fusion from '../../assets/png/fusion.png';
import Heattransfer from '../../assets/png/heattransfer.png';
import Needledetector from '../../assets/png/needledetector.png';
import './CategoryGrid.css';

const images = {
  lockstitch: lockstitchImage,
  overlock: overlockImage,
  interlock: interlockImage,
  heavyduty: heavyDutyImage,
  specialseries: specialImage,
  zigzag: zigzagImage,
  cuttingseries: cuttingImage,
  cuttingmachine: Cuttingmachine,
  fusingmachine: Fusion,
  heattransfer: Heattransfer,
  needledetector: Needledetector,
};

const points = {
  lockstitch: ['integrated_direct_drive_motor', 'advanced_lcd_interface', 'automated_sewing_features'],
  overlock: ['intelligent_fabric_identification_system', 'direct_drive_servo_motor', 'multiple_sewing_modes'],
  interlock: ['high_speed_direct_drive', 'automatic_functionalities', 'specialized_machine_beds'],
  heavyduty: ['quiet_and_smooth_operation', 'robust_design_for_heavy_duty_use', 'top_and_bottom_feed_mechanism'],
  specialseries: ['high_speed_performance', 'versatility_in_button_attachment', 'large_machine_cavity'],
  zigzag: ['versatility_in_material_and_application', 'sophisticated_control_system', 'dynamic_feeding_mechanism'],
  cuttingseries: ['advanced_cutting_features', 'specialized_capabilities', 'powerful_and_quiet_operation'],
  cuttingmachine: ['high_quality_and_fully_automated_cutting', 'versatility_across_industries', 'specialization_for_tough_materials'],
  fusingmachine: ['belt_warping_prevention_system', 'enhanced_durability_of_electrical_components', 'rotary_strip_off_device'],
  heattransfer: ['advanced_temperature_control', 'integrated_heating_technology', 'ergonomic_and_efficient_design'],
  needledetector: ['advanced_detection_technology', 'high_performance_processing', 'energy_efficiency_and_safety_features'],
};

const Loader = () => (
  <div className="p-6 mb-10 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-pulse">
    <div className="h-6 bg-prime rounded-full w-32 mb-4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="w-full bg-gray-300 rounded h-72 mb-4"></div>
      ))}
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const CategoryGrid = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { data: seriesNames = {}, isLoading, error } = useQuery('series', getSeries, {
    select: (data) =>
      data.reduce((acc, series) => {
        acc[series.modelType.toLowerCase()] = series;
        return acc;
      }, {}),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCardClick = (seriesId, seriesName, imageUrl) => {
    navigate(`/categories/${seriesId}/${seriesName.toLowerCase()}`, { state: { imageUrl } });
  };

  return (
    <div id="grid" className="bg-544484 bg-opacity-5 sm:h-[2800px] md:h-[1800px] py-6 sm:py-8 lg:py-12 font-assistant">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="relative mx-auto max-w-5xl text-center">
            <h2 className="block w-full bg-gradient-to-b from-prime to-gray-700 bg-clip-text font-assistant font-bold text-transparent text-3xl sm:text-4xl">
              {t('category')}
            </h2>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          ref={sectionRef}
        >
          <div
            onClick={() => handleCardClick(seriesNames.lockstitch?._id, 'lockstitch', images.lockstitch)}
            className="group relative border border-prime border-opacity-45 flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-2 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.lockstitch}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-7"
                alt="Lockstitch Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.lockstitch.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Lockstitch')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.overlock?._id, 'overlock', images.overlock)}
            className="border border-prime border-opacity-45 group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-1 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.overlock}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Overlock Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.overlock.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Overlock')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.interlock?._id, 'interlock', images.interlock)}
            className="border border-prime border-opacity-45 group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-1 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.interlock}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Interlock Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.interlock.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Interlock')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.heattransfer?._id, 'heattransfer', images.heattransfer)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-2 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.heattransfer}
                className="absolute inset-0 h-[300px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 -mt-2"
                alt="Heat Transfer"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.heattransfer.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Heattransfer')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.needledetector?._id, 'needledetector', images.needledetector)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-2 md:col-span-2 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.needledetector}
                className="absolute inset-0 h-[300px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 -mt-2"
                alt="Needle Detector"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.needledetector.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Needledetector')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.specialseries?._id, 'specialseries', images.specialseries)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-1 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.specialseries}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Special Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.specialseries.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('SpecialSeries')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.zigzag?._id, 'zigzag', images.zigzag)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-1 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.zigzag}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Zigzag Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.zigzag.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Zigzag')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.heavyduty?._id, 'heavyduty', images.heavyduty)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-2 md:col-span-2 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={images.heavyduty}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Heavy Duty Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.heavyduty.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('HeavyDuty')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.cuttingseries?._id, 'cuttingseries', images.cuttingseries)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-2 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={250} offset={100}>
              <img
                src={images.cuttingseries}
                className="absolute inset-0 h-[250px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Cutting Series"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.cuttingseries.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('CuttingSeries')}</p>
            </div>
          </div>
          <div
            onClick={() => handleCardClick(seriesNames.fusingmachine?._id, 'fusingmachine', images.fusingmachine)}
            className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer col-span-1 md:col-span-1 h-48 md:h-72 mt-4"
          >
            <LazyLoad height={250} offset={100}>
              <img
                src={images.fusingmachine}
                className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-4"
                alt="Fusing Machine"
              />
            </LazyLoad>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
            <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
              <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                {points.fusingmachine.map((point, index) => (
                  <li className="pb-3 font-assistant text-[20px]" key={index}>
                    {t(point)}
                  </li>
                ))}
              </ul>
              <p className="seriesTitle">{t('Fusingmachine')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryGrid;

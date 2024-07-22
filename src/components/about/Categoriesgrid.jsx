import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { getSeries } from '../../services/api';
import LazyLoad from 'react-lazyload';
import lockstitchImage from '../../assets/gridpannal/LOCKSTITCH.png';
import overlockImage from '../../assets/gridpannal/OVERLOCK.png';
import interlockImage from '../../assets/gridpannal/INTERLOCK.png';
import heavyDutyImage from '../../assets/gridpannal/HEAVY DUTY.png';
import specialImage from '../../assets/gridpannal/Special.png';
import zigzagImage from '../../assets/gridpannal/ZIGZAG.png';
import cuttingImage from '../../assets/gridpannal/cutting.png';
import Fusion from '../../assets/gridpannal/fusion.png';
import Heattransfer from '../../assets/gridpannal/heattransfer.png';
import Needledetector from '../../assets/gridpannal/needledetector.png';
import './CategoryGrid.css';

const images = {
  lockstitch: lockstitchImage,
  overlock: overlockImage,
  interlock: interlockImage,
  heavyduty: heavyDutyImage,
  specialseries: specialImage,
  zigzag: zigzagImage,
  cuttingseries: cuttingImage,
  fusingmachine: Fusion,
  heattransfer: Heattransfer,
  needledetector: Needledetector,
};

const points = {
  lockstitch: [
    'integrated_direct_drive_motor',
    'advanced_lcd_interface',
    'automated_sewing_features'
  ],
  overlock: [
    'intelligent_fabric_identification_system',
    'direct_drive_servo_motor',
    'multiple_sewing_modes'
  ],
  interlock: [
    'high_speed_direct_drive',
    'automatic_functionalities',
    'specialized_machine_beds'
  ],
  heavyduty: [
    'quiet_and_smooth_operation',
    'robust_design_for_heavy_duty_use',
    'top_and_bottom_feed_mechanism'
  ],
  specialseries: [
    'high_speed_performance',
    'versatility_in_button_attachment',
    'large_machine_cavity'
  ],
  zigzag: [
    'versatility_in_material_and_application',
    'sophisticated_control_system',
    'dynamic_feeding_mechanism'
  ],
  cuttingseries: [
    'advanced_cutting_features',
    'specialized_capabilities',
    'powerful_and_quiet_operation'
  ],
  fusingmachine: [
    'belt_warping_prevention_system',
    'enhanced_durability_of_electrical_components',
    'rotary_strip_off_device'
  ],
  heattransfer: [
    'advanced_temperature_control',
    'integrated_heating_technology',
    'ergonomic_and_efficient_design'
  ],
  needledetector: [
    'advanced_detection_technology',
    'high_performance_processing',
    'energy_efficiency_and_safety_features'
  ]
};

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const seriesTitles = {
  lockstitch: 'Lockstitch',
  overlock: 'Overlock',
  interlock: 'Interlock',
  heavyduty: 'HeavyDuty',
  specialseries: 'SpecialSeries',
  zigzag: 'Zigzag',
  cuttingseries: 'CuttingSeries',
  fusingmachine: 'Fusingmachine',
  heattransfer: 'Heattransfer',
  needledetector: 'Needledetector',
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

  const positions = {
    lockstitch: { gridColumn: '1 / span 2', gridRow: '1 / span 1' },
    overlock: { gridColumn: '3 / span 1', gridRow: '1 / span 1' },
    interlock: { gridColumn: '1 / span 1', gridRow: '2 / span 1' },
    heattransfer: { gridColumn: '2 / span 2', gridRow: '2 / span 1' },
    needledetector: { gridColumn: '1 / span 2', gridRow: '3 / span 1' },
    specialseries: { gridColumn: '3 / span 1', gridRow: '3 / span 1' },
    zigzag: { gridColumn: '1 / span 1', gridRow: '4 / span 1' },
    heavyduty: { gridColumn: '2 / span 2', gridRow: '4 / span 1' },
    cuttingseries: { gridColumn: '1 / span 2', gridRow: '5 / span 1' },
    fusingmachine: { gridColumn: '3 / span 1', gridRow: '5 / span 1' },
  };

  return (
    <div id="grid" className="category-grid">
      <div style={{ maxWidth: '1536px', margin: '0 auto', padding: '16px' }}>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ width: '100%', background: 'linear-gradient(to bottom, #544484, #4b5563)', backgroundClip: 'text', fontFamily: 'Assistant, sans-serif', fontWeight: 'bold', color: 'transparent', fontSize: '2.25rem' }}>
              {t('category')}
            </h2>
          </div>
        </div>

        <motion.div
          className="category-grid-content"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          ref={sectionRef}
        >
          {Object.keys(images).map((seriesKey, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(seriesNames[seriesKey]?._id, seriesKey, images[seriesKey])}
              className="category-card"
              style={{
                ...positions[seriesKey],
                height: '18rem',
              }}
            >
              <LazyLoad height={200} offset={100}>
                <img
                  src={images[seriesKey]}
                  className="category-image"
                  style={{
                    position: 'absolute',
                    inset: '0',
                    height: '210px',
                    width: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    transition: 'transform 200ms',
                    zIndex: '10',
                    marginTop: '28px',
                  }}
                  alt={`${seriesKey} Series`}
                />
              </LazyLoad>
              <div className="category-overlay"></div>
              <div className="category-hover"></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '12px', 
                right: '16px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'end', 
                zIndex: '30' 
              }}>
                <ul className="category-points">
                  {points[seriesKey]?.map((pointKey, index) => (
                    <li style={{ 
                      paddingBottom: '12px', 
                      fontFamily: 'Assistant, sans-serif', 
                      fontSize: '20px' 
                    }} key={index}>
                      {t(pointKey)}
                    </li>
                  ))}
                </ul>
                <p style={{ 
                  display: 'block', 
                  width: '100%', 
                  color: '#544484', 
                  fontFamily: 'Assistant, sans-serif', 
                  fontWeight: 'bold', 
                  fontSize: '1.875rem', 
                  textAlign: 'right' 
                }}>
                  {t(seriesTitles[seriesKey])}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryGrid;

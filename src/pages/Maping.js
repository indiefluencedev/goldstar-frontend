// mappings.js

// Import images
import modelImage from '../assets/svg/fields/model.svg';
import autoThreadTrimmerIcon from '../assets/svg/fields/has auto trimmer.svg';
import autoLiftIcon from '../assets/svg/fields/Has auto lift.svg';
import lightMaterialIcon from '../assets/svg/fields/light material.svg';
import mediumMaterialIcon from '../assets/svg/fields/medium matrial.svg';
import heavyMaterialIcon from '../assets/svg/fields/heavy material.svg';
import horizontalHookIcon from '../assets/svg/fields/horizontal hook.svg';
import liftHeightRangeIcon from '../assets/svg/fields/LIFT height range.svg';
import cutterSizeIcon from '../assets/svg/fields/cutter size.svg';
import diamationalRatioIcon from '../assets/svg/fields/diamational ratio.svg';
import dotIcon from '../assets/svg/fields/dot.svg';
import needleNoIcon from '../assets/svg/fields/needle no.svg';
import needleTypeIcon from '../assets/svg/fields/needle type.svg';
import oilIcon from '../assets/svg/fields/oil.svg';
import packingSizeIcon from '../assets/svg/fields/packinging size.svg';
import powerIcon from '../assets/svg/fields/power.svg';
import speedInRpmIcon from '../assets/svg/fields/speed in rpm.svg';
import stitchLengthIcon from '../assets/svg/fields/stitch  length.svg';
import stitchWidthIcon from '../assets/svg/fields/stitch width.svg';
import threadNoIcon from '../assets/svg/fields/thread no.svg';
import verticalHookIcon from '../assets/svg/fields/vertical hook.svg';
import weightIcon from '../assets/svg/fields/weight.svg';
import zigzagSewingLengthIcon from '../assets/svg/fields/zigzag sewing length.svg';
import stitchWidthFromFrontendIcon from '../assets/svg/fields/Stitch width from front end.svg';

// Export mapping functions
export const getFieldMappings = () => ({

    stitchWidthForInterlockSeries:'Stitch Width Interlock',
    model: 'Model',
    technicalDescription: 'Tech Desc',
    detailedTechnicalDescription: 'Detailed Tech Desc',
    functions: 'Functions',
    needleType: 'Needle Type',
    needleFeed: 'Needle Feed',
    needleGauge: 'Needle Gauge',
    needleNo: 'Needles',
    needleBarStroke: 'Needle Bar Stroke',
    threadNo: 'Threads',
    doubleNeedleStitchLength: 'Stitch Length',
    stitchLength: 'Stitch Length',
    stitchLengthRange: 'Stitch Length Range',
    stitchWidthRange: 'Stitch Width Range',
    stitchWidth: 'Stitch Width',
    liftHeightRange: 'Lift Height Range',
    hasAutoThreadTrimmer: 'Auto Thread Trimmer',
    hasAutoLift: 'Auto Lift',
    isSuitableForLightMaterial: 'Light Material',
    isSuitableForMediumMaterial: 'Medium Material',
    isSuitableForHeavyMaterial: 'Heavy Material',
    horizontalHook: 'Horizontal Hook',
    verticalHook: 'Vertical Hook',
    weight: 'Weight',
    packingSize: 'Packing Size',
    differentialRatio: 'Differential Ratio',
    speedInRPM: 'Speed (RPM)',
    quantityOfStandardPattern: 'Qty Standard Pattern',
    rateOfMagnifyAndShrink: 'Magnify and Shrink',
    powerOfMotorsOutputing: 'Motor Power Output',
    power: 'Power',
    cutterSize: 'Cutter Size',
    zigzagSewingLength: 'Zigzag Sewing Length',
    buttonHoleWidth: 'Button Hole Width',
   
    dot: 'Dot',
    plug: 'Plug',
    oil: 'Oil',
    needleSize: 'Needle Size',
    stitches: 'Stitches',
    sizeOfButtonsThatCanBeSewn: 'Button Size',
    clothFeedingMethod: 'Feeding Method',
    pitch: 'Pitch',
    maximumNumberOfStitches: 'Max Stitches',
    presserFootLiftMethod: 'Presser Foot Lift Method',
    liftingAmountOfPresserFoot: 'Presser Foot Lift Amount',
    buttonClampLift: 'Button Clamp Lift',
    useHook: 'Use Hook',
    wipingDevice: 'Wiping Device',
    threadCuttingDevice: 'Thread Cutting Device',
    dataStorageMethod: 'Data Storage Method',
    externalDataStorageMedium: 'External Storage Medium',
    numberOfCyclicPrograms: 'Cyclic Programs',
    storingData: 'Storing Data',
    motors: 'Motors',
    powerSupply: 'Power Supply',
    barometricPressure: 'Barometric Pressure',
    application: 'Application',
    maxStitch: 'Max. Stitch',
    oilSupply: 'Oil Supply',
    presserFootDriveMode: 'Presser Foot Drive Mode',
    heightOfButtonLifting: 'Button Lifting Height',
    twoStepPresserFoot: 'Two-step Presser Foot',
    intermittentPressureRise: 'Intermittent Pressure Rise',
    intermittentPressureOnTheTrip: 'Intermittent Pressure on Trip',
    threadNipper: 'Thread Nipper',
    ratedPower: 'Rated Power',
    compressedAir: 'Compressed Air',
    upperPressureWheelLiftDistance: 'Pressure Wheel Lift Distance',
    netWeight: 'Net Weight',
    maxOveredgingWidth: 'Max Overedging Width',
    needleStitchRange: 'Needle Stitch Range',
    threadLine: 'Thread Line',
    maxSewingThickness: 'Max Sewing Thickness',
    buttonDiameter: 'Button Diameter',
    cuttingHeightInches: 'Cutting Height (Inches)',
    voltage: 'Voltage',
    frequency: 'Frequency',
    pipingCuttingWidth: 'Piping Cutting Width',
    tableSize: 'Table Size',
    armSize: 'Arm Size',
    knifeSize: 'Knife Size',
    pressureMax: 'Pressure (Max)',
    veltSpeedMax: 'Velt Speed (Max)',
    heatingTime: 'Heating Time',
    fusingWidth: 'Fusing Width',
    cuttingLength: 'Cutting Length',
    cuttingWidth: 'Cutting Width',
    cuttingSpeed: 'Cutting Speed',
    maximumBladeTemperature: 'Max Blade Temp',
    recommendedAirPressure: 'Recommended Air Pressure',
    image: 'Image'
});

export const getImageMappings = () => ({
    model: modelImage,
    hasAutoThreadTrimmer: autoThreadTrimmerIcon,
    hasAutoLift: autoLiftIcon,
    isSuitableForLightMaterial: lightMaterialIcon,
    isSuitableForMediumMaterial: mediumMaterialIcon,
    isSuitableForHeavyMaterial: heavyMaterialIcon,
    horizontalHook: horizontalHookIcon,
    liftHeightRange: liftHeightRangeIcon,
    cutterSize: cutterSizeIcon,
    differentialRatio: diamationalRatioIcon,
    dot: dotIcon,
    needleNo: needleNoIcon,
    needleType: needleTypeIcon,
    oil: oilIcon,
    packingSize: packingSizeIcon,
    
    power: powerIcon,
    powerSupply: powerIcon,
    voltage: powerIcon,
    speedInRPM: speedInRpmIcon,
    stitchLength: stitchLengthIcon,
    stitchWidth: stitchWidthIcon,
    threadNo: threadNoIcon,
    verticalHook: verticalHookIcon,
    weight: weightIcon,
    zigzagSewingLength: zigzagSewingLengthIcon,
    netWeight: weightIcon,

    // Add other fields and their corresponding image imports here
});

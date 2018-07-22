import React from 'react';
import {
  ImageFilterWithColorManagement,
  ImageFilterWithoutColorManagement
} from './image-filter';

const filters = {
  CIBoxBlur: ['inputRadius'],
  CIDiscBlur: ['inputRadius'],
  CIGaussianBlur: ['inputRadius'],
  // CIMaskedVariableBlur: ['inputRadius', 'inputMask'],
  CIMedianFilter: [],
  CIMotionBlur: ['inputRadius', 'inputAngle'],
  CINoiseReduction: ['inputNoiseLevel', 'inputSharpness'],
  CIZoomBlur: ['inputCenter', 'inputAmount'],
  CIColorClamp: ['inputMinComponents', 'inputMaxComponents'],
  CIColorControls: ['inputSaturation', 'inputBrightness', 'inputContrast'],
  CIColorMatrix: [
    'inputRVector', 'inputGVector', 'inputBVector', 'inputAVector', 'inputBiasVector'
  ],
  // CIColorPolynomial,
  // CIExposureAdjust,
  // CIGammaAdjust,
  CIHueAdjust: ['inputAngle'],
  // CILinearToSRGBToneCurve,
  // CISRGBToneCurveToLinear,
  // CITemperatureAndTint,
  // CIToneCurve,
  CIVibrance: ['inputAmount'],
  // CIWhitePointAdjust,
  // CIColorCrossPolynomial,
  // CIColorCube,
  // CIColorCubeWithColorSpace,
  CIColorInvert: [],
  // CIColorMap,
  // CIColorMonochrome,
  CIColorPosterize: ['inputLevels'],
  // CIFalseColor,
  CIMaskToAlpha: [],
  CIMaximumComponent: [],
  CIMinimumComponent: [],
  CIPhotoEffectChrome: [],
  CIPhotoEffectFade: [],
  CIPhotoEffectInstant: [],
  CIPhotoEffectMono: [],
  CIPhotoEffectNoir: [],
  CIPhotoEffectProcess: [],
  CIPhotoEffectTonal: [],
  CIPhotoEffectTransfer: [],
  // CISepiaTone,
  // CIVignette,
  CIVignetteEffect: ['inputCenter', 'inputIntensity', 'inputRadius'],
  // CIAdditionCompositing,
  // CIColorBlendMode,
  // CIColorBurnBlendMode,
  // CIColorDodgeBlendMode,
  // CIDarkenBlendMode,
  // CIDifferenceBlendMode,
  // CIDivideBlendMode,
  // CIExclusionBlendMode,
  // CIHardLightBlendMode,
  // CIHueBlendMode,
  // CILightenBlendMode,
  // CILinearBurnBlendMode,
  // CILinearDodgeBlendMode,
  // CILuminosityBlendMode,
  // CIMaximumCompositing,
  // CIMinimumCompositing,
  // CIMultiplyBlendMode,
  // CIMultiplyCompositing,
  // CIOverlayBlendMode,
  // CIPinLightBlendMode,
  // CISaturationBlendMode,
  // CIScreenBlendMode,
  // CISoftLightBlendMode,
  // CISourceAtopCompositing,
  // CISourceInCompositing,
  // CISourceOutCompositing,
  // CISourceOverCompositing,
  // CISubtractBlendMode,
  CIBumpDistortion: ['inputCenter', 'inputRadius', 'inputScale'],
  CIBumpDistortionLinear: ['inputCenter', 'inputRadius', 'inputScale', 'inputAngle'],
  CICircleSplashDistortion: ['inputCenter', 'inputRadius'],
  CICircularWrap: ['inputCenter', 'inputRadius', 'inputAngle'],
  // CIDroste,
  // CIDisplacementDistortion,
  // CIGlassDistortion,
  // CIGlassLozenge,
  // CIHoleDistortion,
  // CILightTunnel,
  // CIPinchDistortion,
  // CIStretchCrop,
  // CITorusLensDistortion,
  // CITwirlDistortion,
  // CIVortexDistortion,
  // CIAztecCodeGenerator,
  // CICheckerboardGenerator,
  // CICode128BarcodeGenerator,
  // CIConstantColorGenerator,
  // CILenticularHaloGenerator,
  // CIPDF417BarcodeGenerator,
  // CIQRCodeGenerator,
  // CIRandomGenerator,
  // CIStarShineGenerator,
  // CIStripesGenerator,
  // CISunbeamsGenerator,
  // CIAffineTransform,
  // CICrop,
  // CILanczosScaleTransform,
  // CIPerspectiveCorrection,
  // CIPerspectiveTransform,
  // CIPerspectiveTransformWithExtent,
  // CIStraightenFilter,
  // CIGaussianGradient,
  // CILinearGradient,
  // CIRadialGradient,
  // CISmoothLinearGradient,
  CICircularScreen: ['inputCenter', 'inputWidth', 'inputSharpness'],
  // CICMYKHalftone,
  CIDotScreen: ['inputCenter', 'inputAngle', 'inputWidth', 'inputSharpness'],
  // CIHatchedScreen,
  // CILineScreen,
  // CIAreaAverage,
  // CIAreaHistogram,
  // CIRowAverage,
  // CIColumnAverage,
  // CIHistogramDisplayFilter,
  // CIAreaMaximum,
  // CIAreaMinimum,
  // CIAreaMaximumAlpha,
  // CIAreaMinimumAlpha,
  CISharpenLuminance: ['inputSharpness'],
  CIUnsharpMask: ['inputRadius', 'inputIntensity'],
  // CIBlendWithAlphaMask,
  // CIBlendWithMask,
  // CIBloom,
  // CIComicEffect,
  // CIConvolution3X3,
  // CIConvolution5X5,
  // CIConvolution7X7,
  // CIConvolution9Horizontal,
  // CIConvolution9Vertical,
  CICrystallize: ['inputRadius', 'inputCenter'],
  // CIDepthOfField,
  // CIEdges,
  // CIEdgeWork,
  // CIGloom,
  // CIHeightFieldFromMask,
  // CIHexagonalPixellate,
  // CIHighlightShadowAdjust,
  // CILineOverlay,
  // CIPixellate,
  // CIPointillize,
  // CIShadedMaterial,
  // CISpotColor,
  // CISpotLight,
  // CIAffineClamp,
  // CIAffineTile,
  // CIEightfoldReflectedTile,
  // CIFourfoldReflectedTile,
  // CIFourfoldRotatedTile,
  // CIFourfoldTranslatedTile,
  // CIGlideReflectedTile,
  // CIKaleidoscope,
  // CIOpTile,
  // CIParallelogramTile,
  // CIPerspectiveTile,
  // CISixfoldReflectedTile,
  // CISixfoldRotatedTile,
  // CITriangleKaleidoscope,
  // CITriangleTile,
  // CITwelvefoldReflectedTile,
  // CIAccordionFoldTransition,
  // CIBarsSwipeTransition,
  // CICopyMachineTransition,
  // CIDisintegrateWithMaskTransition,
  // CIDissolveTransition,
  // CIFlashTransition,
  // CIModTransition,
  // CIPageCurlTransition,
  // CIPageCurlWithShadowTransition,
  // CIRippleTransition,
  // CISwipeTransition
};

const nativeImageFilter = (name) => {
  return name === 'CIColorMatrix' || name === 'CIColorInvert'
    ? ImageFilterWithoutColorManagement
    : ImageFilterWithColorManagement;
};

const createImageNativeFilter = (name, paramNames, ImageFilter) => ({ children, ...restProps }) => (
  <ImageFilter
    name={name}
    paramNames={paramNames}
    {...restProps}
  >
    {children}
  </ImageFilter>
);

export default Object.keys(filters).reduce(
  (acc, name) => {
    acc[name] = createImageNativeFilter(name, filters[name], nativeImageFilter(name));
    acc[name].displayName = name;
    return acc;
  },
  {}
);


import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import '../ServiceListing/LogoListing.css';
import PackagePriceLogo from '../PackagePriceLogo/PackagePriceLogo'

const LogoListing = () => {
    const carouselItemsLogo = [
        {
          title: 'Logo',
          imageUrl: './brow1.jpg',
        },
        {
          title: 'Logo',
          imageUrl: './toq1.jpg',
        },
        {
          title: 'Logo',
          imageUrl: './lum1.jpg',
        },
        {
          title: 'Logo',
          imageUrl: './img9.jpg',
        }
      ];
    
      const serviceOfferCat = "Graphics & Design";
      const carouselLogoTitle = 'I will do business logo design';
      const serviceOfferLogoBasicTitle = "Basic Package";
      const serviceOfferLogoBasicPackage = "1 concept (you need to have an idea/concept of how you want your logo to look like) If you ordered BASIC PACKAGE, it is mandatory to have a sketch on paper or a clear idea of how you want the logo to look, and I will realize that idea.";
      const serviceOfferLogoBasicPackageFormat = "Any format files AI / EPS / PDF / SVG / JPEG / PNG ";
      const serviceOfferLogoBasicPackageRev = "1 REVISION";
      const serviceOfferLogoBasicPackageDays = "3 days of delivery";
    
      const serviceOfferLogoStandardTitle = "STANDARD PACKAGE:";
      const serviceOfferLogoStandardPackage = "2 concepts";
      const serviceOfferLogoStandardPackageFormat = "Any format files AI / EPS / PDF / SVG / JPEG / PNG ";
      const serviceOfferLogoStandardPackageRev = "2 REVISION";
      const serviceOfferLogoStandardPackageDays = "3 days of delivery";
    
      const serviceOfferLogoPremiumTitle = "Premium Package";
      const serviceOfferLogoPremiumPackage = "2 concepts";
      const serviceOfferLogoPremiumPackageFormat = "Any format files AI / EPS / PDF / SVG / JPEG / PNG";
      const serviceOfferLogoPremiumPackageRev = "Unlimited / REVISIONS";
      const serviceOfferLogoPremiumPackageDays = "3 days of delivery";
    
      return(
        <div id="ServicesOffer" class="ServicesOffer">
              <div class="ServicesOfferContent">
                    <div class="CarouselContainer">
                        <h1>{serviceOfferCat}</h1>
                        <h2>{carouselLogoTitle}</h2>
                        <CarouselSlider items={carouselItemsLogo} />
                        <h1>About This Service</h1>
                        <div class="packageContainer Container">
                                <h2>{serviceOfferLogoBasicTitle}</h2>
                                <h3>{serviceOfferLogoBasicPackage}</h3>
                                <h3>{serviceOfferLogoBasicPackageFormat}</h3>
                                <h3>{serviceOfferLogoBasicPackageRev}</h3>
                                <h3>{serviceOfferLogoBasicPackageDays}</h3>
                        </div>
                        <div class="packageContainer Container">
                                <h2>{serviceOfferLogoStandardTitle}</h2>
                                <h3>{serviceOfferLogoStandardPackage}</h3>
                                <h3>{serviceOfferLogoStandardPackageFormat}</h3>
                                <h3>{serviceOfferLogoStandardPackageRev}</h3>
                                <h3>{serviceOfferLogoStandardPackageDays}</h3>
                        </div>
                        <div class="packageContainer Container">
                                <h2>{serviceOfferLogoPremiumTitle}</h2>
                                <h3>{serviceOfferLogoPremiumPackage}</h3>
                                <h3>{serviceOfferLogoPremiumPackageFormat}</h3>
                                <h3>{serviceOfferLogoPremiumPackageRev}</h3>
                                <h3>{serviceOfferLogoPremiumPackageDays}</h3>
                        </div>
                    </div>
                    <div class='ServiceOfferPackagePrices-wrapper'>
                            <PackagePriceLogo />
                    </div>
              </div>
          </div>
        );
    }
    export default LogoListing;
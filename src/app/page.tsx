"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function CoffeePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "menu" },
            { name: "Blog", id: "blog" },
            { name: "Media", id: "media" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546798806-8b13y4pc.jpg"
          logoAlt="Black Coffee Logo"
          brandName="Black Coffee"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Freshly Roasted COFFEE"
          description="Experience the finest premium coffee crafted with passion and precision"
          buttons={[
            { text: "Shop Now", href: "#menu" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546800316-mt4oze40.jpg"
          imageAlt="Freshly roasted coffee beans in white cup"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
        />
      </div>

      <div id="categories" data-section="categories">
        <ProductCardOne
          title="TOP CATEGORIES"
          description="Explore The Recent Most Bought Drinks This Week"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              name: "Hot Chocolate",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546801454-a6n5wa23.jpg"
            },
            {
              id: "2",
              name: "Espresso Coffee",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546803546-rj05et95.jpg"
            },
            {
              id: "3",
              name: "Mocha Coffee",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546806105-ofbjk2th.jpg"
            },
            {
              id: "4",
              name: "Lata Coffee",
              price: "Premium",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546807706-v8u0xtoz.jpg"
            }
          ]}
        />
      </div>

      <div id="milkshakes" data-section="milkshakes">
        <ProductCardThree
          title="TOP Milk Shakes"
          description="Explore The Recent Most Bought Shakes This Week"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              name: "Biscoff Milkshakes",
              price: "200ml",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546810379-j12te0w3.jpg",
              initialQuantity: 1,
              onQuantityChange: null
            },
            {
              id: "2",
              name: "Salted Caramel Milkshakes",
              price: "200ml",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546811917-oswjd4xv.jpg",
              initialQuantity: 1,
              onQuantityChange: null
            },
            {
              id: "3",
              name: "Decadent Chocolate Milkshakes",
              price: "200ml",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546814854-1qo7980a.jpg",
              initialQuantity: 1,
              onQuantityChange: null
            },
            {
              id: "4",
              name: "Chocolate Milkshakes",
              price: "200ml",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763546816698-twkbq5y0.jpg",
              initialQuantity: 1,
              onQuantityChange: null
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated With Our Latest Offers"
          description="Subscribe to our newsletter for exclusive deals, new drink releases, and special promotions delivered straight to your inbox"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          onSubmit={null}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Black Coffee"
          columns={[
            {
              title: "Products",
              items: [
                { label: "Mocha Coffee", href: "#menu" },
                { label: "Espresso Coffee", href: "#menu" },
                { label: "Lata Coffee", href: "#menu" },
                { label: "Milk Shakes", href: "#menu" }
              ]
            },
            {
              title: "Category",
              items: [
                { label: "Men", href: "#" },
                { label: "Women", href: "#" },
                { label: "Kids", href: "#" }
              ]
            },
            {
              title: "Company Info",
              items: [
                { label: "About Us", href: "#" },
                { label: "Contact Us", href: "#contact" },
                { label: "Support", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "YouTube"
            }
          ]}
          copyrightText="© 2025 Black Coffee | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}
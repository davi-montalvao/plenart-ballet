"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(250,248,246,0.65);
  backdrop-filter: blur(4px);
  transition: background-color 350ms ease, backdrop-filter 350ms ease;
`;

export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  background-color: rgba(250, 248, 246, 0.78);
  border-bottom: 1px solid rgba(232,228,224,0.7);
  transition: background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease;
`;

export const NavIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: #1a4d5c;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
export const SiteTitle = styled.h1`
  color: #1a4d5c;
  font-family: var(--font-playfair);
`;

export const MenuToggle = styled.button`
  color: #1a1a1a;
  background: transparent;
  border: none;
  display: block;
  padding: 0.25rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg { width: 24px; height: 24px; display: block; }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  background-color: white;
  border-top: 1px solid #e8e4e0;
`;

export const NavLink = styled.button`
  color: #4a4a4a;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover { color: #1a4d5c; }
`;

export const LogoImg = styled.img`
  object-fit: contain;
  display: block;
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: 38px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  position: relative;
  z-index: 30;

  @media (min-width: 768px) {
    font-size: 48px;
    margin-top: -3.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 56px;
    margin-top: -5.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: var(--font-lora);
  color: #666;
  font-weight: 400;
`;

export const CTAButton = styled.button`
  background-color: #1a4d5c;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 500;
  border: none;
`;

export const HeroImage = styled.div`
  height: 420px;
  width: 100%;
  max-width: 64rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: rgba(255,255,255,0.35);
  transition: background-color 350ms ease, box-shadow 350ms ease, transform 350ms ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const AboutImageWrapper = styled.div`
  height: 360px;
  background-color: rgba(232,228,224,0.45);
  overflow: hidden;
  border-radius: 0.75rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  @media (min-width: 768px) {
    img { object-position: center center; }
  }
  transition: background-color 300ms ease, transform 300ms ease;
`;

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 288px;
    height: 288px;
  }

  @media (min-width: 1280px) {
    width: 380px;
    height: 380px;
  }
`;

export const CTAMargin = styled.div`
  margin: 24px 0;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 48px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
`;

export const SectionSubtitle = styled.p`
  font-family: var(--font-lora);
  color: #666;
  font-size: 1.125rem;
`;

export const FeaturesGrid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CardTitle = styled.h4`
  font-family: var(--font-playfair);
  font-size: 22px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
`;


export const Specialty = styled.p`
  color: #d4a574;
  font-family: var(--font-lora);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

export const BodyText = styled.p`
  font-family: var(--font-lora);
  color: #666;
  line-height: 1.6;
`;

export const InstructorImageBox = styled.div`
  height: 280px;
  background-color: rgba(232,228,224,0.45);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 300ms ease, transform 300ms ease;
`;

export const EmojiLarge = styled.span`
  font-size: 3rem;
`;

export const GalleryItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transition: box-shadow 280ms ease, background-color 300ms ease, transform 300ms ease;
  height: 300px;
  background-color: rgba(232,228,224,0.38);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 600ms cubic-bezier(.2,.8,.2,1);
  will-change: transform;
`;

export const Slide = styled.div`
  min-width: 260px;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 14px 40px rgba(0,0,0,0.12);

  transition: transform 350ms ease, box-shadow 350ms ease, background-color 350ms ease;

  @media (min-width: 1024px) {
    min-width: 320px;
    max-width: 420px;
    height: 420px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
  transition: transform 350ms ease, opacity 350ms ease;
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.45);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover { background: rgba(0,0,0,0.6); }
`;

export const CarouselPrev = styled(CarouselNavButton)`
  left: 12px;
`;

export const CarouselNext = styled(CarouselNavButton)`
  right: 12px;
`;

export const DotContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;
  display: flex;
  gap: 8px;
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.6);
  border: none;
  cursor: pointer;

  &.active { background: #1a4d5c; }
`;



export const AboutHeading = styled.h2`
  font-family: var(--font-playfair);
  font-size: 48px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.02em;
`;

export const AboutText = styled.div`
  font-family: var(--font-lora);
  line-height: 1.8;
  color: #4a4a4a;
`;

export const BulletDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  margin-top: 0.5rem;
  background-color: #d4a574;
  flex-shrink: 0;
`;

export const FooterBar = styled.footer`
  background-color: #2a2a2a;
  color: white;
`;

export const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }
`;

export const SobreSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;

  @media (min-width: 1024px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ClassesGrid = styled(GridThree)``;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 46% 1fr;
  }
`;

export const NavLinksContainer = styled.div`
  display: none;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
`;

export const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
`;

export const BackToTop = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(26,77,92,0.95);
  color: white;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 9999;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 200ms ease, transform 200ms ease;
  pointer-events: none;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  svg { width: 18px; height: 18px; display: block; }

  @media (min-width: 768px) {
    right: 2rem;
    bottom: 2rem;
  }
  @media (max-width: 767px) {
    /* raise button on small screens so it's visible earlier (not stuck at footer) */
    bottom: 10vh;
  }
`;

export const GridFour = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
`;

export const InstructorCard = styled.div`
  text-align: center;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CTASection = styled.section`
  padding: 3rem 2rem;
  background: white;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 4.5rem 5rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e8e4e0;
  font-family: var(--font-lora);
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e8e4e0;
  font-family: var(--font-lora);
`;

export const FooterContainer = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export default {};

export const SmallHeading = styled.h4`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: #1a1a1a;
  font-family: var(--font-lora);
  display: block;
  margin-bottom: 0.75rem;
`;

export const MutedText = styled.p`
  font-family: var(--font-lora);
  color: #666;
  margin: 0 0 0.75rem 0;
`;

export const FooterHeading = styled.h5`
  font-family: var(--font-playfair);
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
`;

export const FooterText = styled.p`
  font-family: var(--font-lora);
  color: #bbb;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #cfcfcf;
  font-family: var(--font-lora);
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-block;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;

  &:hover { color: white; }

  &:focus {
    outline: 2px solid rgba(255,255,255,0.12);
    outline-offset: 2px;
  }
`;

export const Accent = styled.span`
  color: #1a4d5c;
`;

export const FullWidthButton = styled(CTAButton)`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 2rem;
  text-align: center;
  color: #cfcfcf;
  font-family: var(--font-lora);
  font-size: 14px;
`;

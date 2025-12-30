"use client";

import { useState, useEffect } from "react";
import Container from "./components/Container";
import {
  PageWrapper,
  NavBar,
  NavIcon,
  SiteTitle,
  MenuToggle,
  MobileMenu,
  NavLink,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  HeroImage,
  AboutImageWrapper,
  AboutHeading,
  AboutText,
  BulletDot,
  LogoWrap,
  Section,
  GridTwo,
  GridThree,
  Card,
  InstructorCard,
  CTASection,
  ContactGrid,
  FormInput,
  FormTextArea,
  FooterBar,
  FooterContainer,
  SmallHeading,
  Label,
  MutedText,
  Accent,
  FullWidthButton,
  NavInner,
  LeftGroup,
  RightGroup,
  LogoImage,
  CTAMargin,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureItem,
  CardTitle,
  ClassesGrid,
  FooterHeading,
  FooterText,
  FooterLink,
  FooterBottom,
  NavLinksContainer,
  MobileMenuInner,
  BackToTop,
  BodyText,
  InstructorImageBox,
  Specialty,
  EmojiLarge,
  GalleryGrid,
  GalleryItem,
  GridFour,
  SobreSection,
} from "./styles";
import GalleryCarousel from "./components/GalleryCarousel";
import { CarouselContainer } from "./styles";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setShowTop(y > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }

  return (
    <PageWrapper>
      <NavBar>
        <Container>
          <NavInner>
            <LeftGroup>
              <NavIcon>
                <img src="/images/miniLogo.png" alt="Plenart mini logo" />
              </NavIcon>
              <SiteTitle>Plenarte Ballet</SiteTitle>
            </LeftGroup>

            <RightGroup>
              <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </MenuToggle>

              <NavLinksContainer>
                {["Sobre", "Classes", "Instrutores", "Galeria", "Contato"].map((item) => (
                  <NavLink key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </NavLink>
                ))}
              </NavLinksContainer>
            </RightGroup>
          </NavInner>
        </Container>

        {isMenuOpen && (
          <MobileMenu>
            <MobileMenuInner>
              {["Sobre", "Classes", "Instrutores", "Galeria", "Contato"].map((item) => (
                <NavLink key={item} onClick={() => scrollToSection(item.toLowerCase())}>
                  {item}
                </NavLink>
              ))}
            </MobileMenuInner>
          </MobileMenu>
        )}
      </NavBar>

      <Section>
        <Container $center>
          <LogoWrap>
            <LogoImage src="/logo.png" alt="Plenarte Ballet logo" />
          </LogoWrap>

          <HeroTitle>A arte em plenitude</HeroTitle>

          <CTAMargin>
            <CTAButton onClick={() => scrollToSection("classes")}>Conheça Nossas Classes</CTAButton>
          </CTAMargin>

          <HeroImage>
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/classes-hero-mobile.png" type="image/png" />
              <source srcSet="/images/classes-hero.png" type="image/png" />
              <img src="/images/classes-hero.png" alt="Aula de balé" loading="lazy" />
            </picture>
          </HeroImage>
        </Container>
      </Section>

      <SobreSection id="sobre">
        <Container>
          <GridTwo>
            <AboutImageWrapper>
              <img src="/images/aboutUs.png" alt="Sobre a Plenarte" loading="lazy" />
            </AboutImageWrapper>

            <div>
              <AboutHeading>Nossa história</AboutHeading>
              <AboutText>
                O Plenarte Ballet é um espaço dedicado à formação em dança com profundidade artística, técnica e humana.
                Sob direção de Fernanda Abreu, a escola propõe um ensino que respeita o desenvolvimento individual, une rigor técnico à sensibilidade e compreende a dança como linguagem, expressão e construção de identidade. Aqui o Ballet é vivido com consciência, tempo e verdade.
              </AboutText>

              <FeaturesGrid>
                <FeatureItem>
                  <BulletDot />
                  <p>Aulas para todas as idades</p>
                </FeatureItem>

                <FeatureItem>
                  <BulletDot />
                  <p>Professores certificados</p>
                </FeatureItem>
              </FeaturesGrid>
            </div>
          </GridTwo>
        </Container>
      </SobreSection>

      {/* Classes Section */}
      <Section id="classes">
        <Container>
          <SectionHeader>
            <SectionTitle>Nossas <Accent>Classes</Accent></SectionTitle>
            <SectionSubtitle>Programas estruturados para todos os níveis</SectionSubtitle>
          </SectionHeader>

          <ClassesGrid>
            {[
              { title: "Baby Class", age: "De 3 a 4 anos", desc: "A introdução lúdica ao ballet. Trabalhamos a coordenação, a musicalidade e a disciplina de forma encantadora para as pequenas bailarinas." },
              { title: "Ballet Clássico", age: "A partir de 8 anos", desc: "A base técnica completa para todas as idades. Oferecemos turmas do iniciante ao avançado, focando em postura, técnica e expressão artística." },
              { title: "Ballet Fitness", age: "A partir de 16 anos", desc: "O poder do ballet aliado ao condicionamento físico. Exercícios na barra e no centro focados em tonificação muscular, flexibilidade e postura." },
              { title: "Jazz Dance", age: "A partir de 8 anos", desc: "Liberdade e energia. Uma modalidade vibrante que une a técnica clássica com ritmos modernos, agilidade e muita expressão corporal." },
              { title: "K-Pop", age: "A partir de 8 anos", desc: "Aprenda as coreografias dos seus ídolos. Uma aula dinâmica e divertida, focada em ritmo, sincronia e na cultura pop coreana." },
              { title: "Debutantes e Noivos", age: "Todas as idades", desc: "Consultoria e criação de coreografias personalizadas. Transformamos seu momento especial em uma apresentação única, elegante e inesquecível." },
              { title: "Ballet Preparatório", age: "De 3 a 4 anos", desc: "Turma de transição do Baby Class para o ballet clássico, com foco em postura, coordenação e musicalidade, de forma lúdica e respeitosa." }
             ].map((cls, idx) => (
              <Card key={idx}>
                <CardTitle>{cls.title}</CardTitle>
                <Specialty>{cls.age}</Specialty>
                <BodyText>{cls.desc}</BodyText>
              </Card>
            ))}
          </ClassesGrid>
        </Container>
      </Section>

      {/* Instrutores Section */}
      <Section id="instrutores">
        <Container>
          <SectionHeader>
            <SectionTitle>Nossos <Accent>Instrutores</Accent></SectionTitle>
            <SectionSubtitle>Profissionais experientes dedicados ao seu desenvolvimento</SectionSubtitle>
          </SectionHeader>

          <GridFour>
            {[
              { name: "Marina Silva", speciality: "Ballet Clássico" },
              { name: "Lucas Santos", speciality: "Contemporâneo" },
              { name: "Beatriz Oliveira", speciality: "Infantil" },
              { name: "Rafael Costa", speciality: "Técnica Avançada" }
            ].map((instructor, idx) => (
              <InstructorCard key={idx}>
                  <InstructorImageBox>
                    <EmojiLarge>👩‍🎓</EmojiLarge>
                  </InstructorImageBox>
                <CardTitle>{instructor.name}</CardTitle>
                <Specialty>{instructor.speciality}</Specialty>
              </InstructorCard>
            ))}
          </GridFour>
        </Container>
      </Section>

      {/* Galeria Section */}
      <Section id="galeria">
        <Container>
          <SectionHeader>
            <SectionTitle><Accent>Galeria</Accent> de Momentos</SectionTitle>
            <SectionSubtitle>Capturando a beleza de nossas apresentações</SectionSubtitle>
          </SectionHeader>

          {/* Carousel similar to landonorris.com "On Socials" */}
          <GalleryCarousel />
        </Container>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <Container $center>
          <SectionTitle>Pronto para <Accent>Dançar?</Accent></SectionTitle>
          <SectionSubtitle>Agende uma aula experimental e descubra a magia da dança</SectionSubtitle>
          <CTAMargin>
            <CTAButton onClick={() => scrollToSection("contato")}>Agende Sua Aula</CTAButton>
          </CTAMargin>
        </Container>
      </CTASection>

      {/* Contato Section */}
      <Section id="contato">
        <Container>
          <div>
            <AboutHeading>
              Entre em <Accent>Contato</Accent>
            </AboutHeading>
          </div>

          <ContactGrid>
            <div>
              <SmallHeading>Informações</SmallHeading>
              <div>
                <div>
                  <Label as="p">Endereço</Label>
                  <MutedText>Rua Carlos Weber, 276 - Vila Leopoldina</MutedText>
                  <MutedText>São Paulo, SP</MutedText>
                </div>
                <div>
                  <Label as="p">Telefone</Label>
                  <MutedText>(11) 93243-3250</MutedText>
                </div>
                <div>
                  <Label as="p">Email</Label>
                  <MutedText>contato@plenarteballet.com</MutedText>
                </div>
                <div>
                  <Label as="p">Horário</Label>
                  <MutedText>Seg-Sex: 08h - 22h</MutedText>
                  <MutedText>Sábado: 08h - 12h</MutedText>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <Label htmlFor="name">Nome</Label>
                <FormInput id="name" type="text" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <FormInput id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <FormTextArea id="message" rows={5} placeholder="Sua mensagem..." />
              </div>
              <div>
                <FullWidthButton type="submit">Enviar Mensagem</FullWidthButton>
              </div>
            </form>
          </ContactGrid>
        </Container>
      </Section>

      {/* Footer */}
      <FooterBar>

      <BackToTop
        className={showTop ? "visible" : ""}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Subir para o topo"
      >
        <span>Subir</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
      </BackToTop>

        <FooterContainer>
          <GridFour>
            <div>
              <FooterHeading>Plenart Ballet</FooterHeading>
              <FooterText>Excelência em Dança</FooterText>
            </div>
            <div>
              <FooterHeading>Menu</FooterHeading>
              <ul>
                {["Sobre", "Classes", "Instrutores"].map((item) => (
                  <li key={item}>
                    <FooterLink as="button" onClick={() => scrollToSection(item.toLowerCase())}>{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeading>Redes Sociais</FooterHeading>
              <ul>
                {["Instagram", "Facebook", "TikTok"].map((item) => (
                  <li key={item}>
                    <FooterLink href="#">{item}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterHeading>Contato</FooterHeading>
              <FooterText>(11) 93243-3250</FooterText>
              <FooterText>contato@plenartballet.com</FooterText>
            </div>
          </GridFour>

          <FooterBottom>
            <p>&copy; 2025 Plenart Ballet. Todos os direitos reservados.</p>
          </FooterBottom>
        </FooterContainer>
      </FooterBar>

    </PageWrapper>
  );
}

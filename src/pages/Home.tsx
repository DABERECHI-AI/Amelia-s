import { useEffect, useRef } from "react";

const cabbageImage =
  "https://images.unsplash.com/photo-1772881382620-04ee08835ef9?auto=format&fit=crop&w=2400&q=85";

const products = [
  { name: "Ugu", category: "Leafy Greens", price: "₦200", unit: "per bundle", tag: "Fresh pick" },
  { name: "Spinach", category: "Leafy Greens", price: "₦200", unit: "per bundle", tag: "" },
  { name: "Waterleaf", category: "Leafy Greens", price: "₦500", unit: "per bundle", tag: "" },
  { name: "Scent Leaf", category: "Herbs & Aromatics", price: "₦200", unit: "per bundle", tag: "" },
  { name: "Bitter Leaf", category: "Leafy Greens", price: "₦500", unit: "per bundle", tag: "" },
  { name: "Lettuce", category: "Leafy Greens", price: "₦500", unit: "per bundle", tag: "" },
  { name: "Utazi", category: "Leafy Greens", price: "₦500", unit: "per bundle", tag: "" },
  { name: "Tomatoes", category: "Fruit Vegetables", price: "₦4,500", unit: "per basket", tag: "Popular" },
];

const categories = [
  { name: "Leafy Greens", count: "08 varieties", symbol: "✳", color: "#dce8d5" },
  { name: "Fruit Vegetables", count: "07 varieties", symbol: "◉", color: "#f0ded2" },
  { name: "Roots & Tubers", count: "07 varieties", symbol: "✿", color: "#e9dfc9" },
  { name: "Gourds & Squash", count: "04 varieties", symbol: "⌁", color: "#dce5d4" },
  { name: "Herbs & Aromatics", count: "07 varieties", symbol: "❋", color: "#e2e8d9" },
  { name: "Cruciferous", count: "03 varieties", symbol: "✳", color: "#e1e5d9" },
];

const bundles = [
  {
    name: "Soup Pack",
    description: "The essentials for a delicious pot of soup.",
    items: "Ugu · Onions · Pepper · Tomatoes",
    number: "01",
  },
  {
    name: "Stew Starter",
    description: "A fresh foundation for your favourite stew.",
    items: "Tomatoes · Pepper · Onions",
    number: "02",
  },
  {
    name: "Salad Box",
    description: "A colourful selection for fresh, crisp salads.",
    items: "Lettuce · Cucumber · Carrot · Cabbage",
    number: "03",
  },
  {
    name: "Smoothie & Juice Pack",
    description: "Fresh ingredients for your daily blends.",
    items: "Carrot · Beetroot · Ginger",
    number: "04",
  },
];

const whatsappLink =
  "https://wa.me/?text=Hello%20Amelia's!%20I'd%20like%20to%20place%20an%20order.";

export default function Home() {
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = storyRef.current;
    if (!section) return;

    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / scrollable)
        );

        section.style.setProperty("--progress", progress.toString());
      });
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <main className="amelia-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --paper: #E5E5E6;
          --green: #0F2E15;
          --wine: #590016;
          --muted: #73766f;
          --line: rgba(15,46,21,.15);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--paper);
        }

        .amelia-site {
          background: var(--paper);
          color: var(--green);
          font-family: 'Inter', 'Switzer', sans-serif;
          overflow: hidden;
        }

        .amelia-site a {
          color: inherit;
          text-decoration: none;
        }

        .announcement {
          min-height: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px 16px;
          background: var(--green);
          color: #f5f2e9;
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-align: center;
        }

        .navbar {
          height: 82px;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 20;
          background: var(--paper);
        }

        .logo {
          font-size: 29px;
          font-weight: 700;
          letter-spacing: -.08em;
        }

        .logo span {
          color: var(--wine);
        }

        .logo small {
          display: block;
          font-size: 8px;
          letter-spacing: .32em;
          font-weight: 500;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 12px;
          color: #465348;
        }

        .nav-links a:hover {
          color: var(--wine);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 12px;
        }

        .nav-order {
          background: var(--green);
          color: white !important;
          padding: 13px 20px;
          border-radius: 2px;
          transition: .2s ease;
        }

        .nav-order:hover,
        .button-dark:hover {
          background: var(--wine);
        }

        /* CINEMATIC HERO */

        .hero-story {
          height: 410vh;
          position: relative;
          --progress: 0;
        }

        .hero-stage {
          height: 100vh;
          min-height: 650px;
          position: sticky;
          top: 0;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 52%, #f8f8f7 0%, #e9e9e9 43%, #d8d9d9 100%);
          isolation: isolate;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          opacity: .16;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
        }

        .hero-topline {
          position: absolute;
          z-index: 12;
          top: 38px;
          left: 6%;
          right: 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: .2em;
          color: rgba(15,46,21,.65);
        }

        .hero-topline span:last-child {
          text-align: right;
        }

        .hero-heading {
          position: absolute;
          z-index: 4;
          width: 100%;
          top: 17%;
          text-align: center;
          padding: 0 15px;
          transform: translateY(calc(var(--progress) * -100px));
          opacity: calc(1 - var(--progress) * 1.6);
          transition: none;
        }

        .hero-eyebrow {
          font-size: 10px;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--wine);
          margin-bottom: 22px;
        }

        .hero-heading h1 {
          margin: 0;
          font-size: clamp(48px, 8.5vw, 116px);
          line-height: .91;
          letter-spacing: -.085em;
          font-weight: 500;
          max-width: 1050px;
          margin-inline: auto;
        }

        .hero-heading h1 em {
          font-family: Georgia, serif;
          font-weight: 400;
          color: var(--wine);
        }

        .hero-subtitle {
          margin: 24px auto 0;
          font-size: 12px;
          line-height: 1.8;
          color: #5d665d;
          max-width: 360px;
        }

        .hero-world {
          position: absolute;
          inset: 0;
          z-index: 3;
          transform:
            translateY(calc(var(--progress) * -160px))
            scale(calc(1 + var(--progress) * .75));
          transform-origin: 50% 55%;
          will-change: transform;
        }

        .hero-cloud {
          position: absolute;
          width: 65vw;
          height: 22vw;
          min-height: 180px;
          border-radius: 50%;
          filter: blur(45px);
          background: rgba(255,255,255,.72);
          opacity: .8;
        }

        .cloud-one {
          left: -20%;
          top: 54%;
        }

        .cloud-two {
          right: -20%;
          top: 42%;
          opacity: .6;
        }

        .cloud-three {
          left: 20%;
          bottom: -13%;
          width: 70vw;
          opacity: .9;
        }

        .island-shadow {
          position: absolute;
          width: min(65vw, 760px);
          height: 110px;
          left: 50%;
          top: 78%;
          transform: translateX(-50%);
          background: rgba(21,39,23,.28);
          filter: blur(45px);
          border-radius: 50%;
        }

        .cabbage-island {
          position: absolute;
          left: 50%;
          top: 52%;
          width: min(62vw, 760px);
          aspect-ratio: 1.35 / 1;
          transform: translate(-50%, -50%);
          border-radius: 48% 52% 45% 55% / 48% 46% 54% 52%;
          filter: drop-shadow(0 38px 28px rgba(20,39,22,.2));
          animation: island-float 7s ease-in-out infinite;
        }

        .cabbage-island::before {
          content: "";
          position: absolute;
          inset: 7% -5% -8%;
          z-index: -1;
          border-radius: 48% 52% 45% 55%;
          background:
            radial-gradient(ellipse at 50% 25%, #73915b, #29472b 58%, #162b1b 85%);
          filter: blur(2px);
        }

        .cabbage-island img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 48% 52% 45% 55% / 48% 46% 54% 52%;
          filter: saturate(1.12) contrast(1.03);
          -webkit-mask-image: radial-gradient(ellipse, #000 56%, rgba(0,0,0,.9) 72%, transparent 100%);
          mask-image: radial-gradient(ellipse, #000 56%, rgba(0,0,0,.9) 72%, transparent 100%);
        }

        .cabbage-shine {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,.24), transparent 35%, transparent 70%, rgba(0,0,0,.12));
          pointer-events: none;
        }

        @keyframes island-float {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -18px; }
        }

        .floating-produce {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 20px 35px rgba(15,46,21,.18);
          animation: produce-float 6s ease-in-out infinite;
        }

        .floating-produce.tomato {
          width: clamp(48px, 7vw, 92px);
          aspect-ratio: 1;
          left: 18%;
          top: 53%;
          background: radial-gradient(circle at 30% 25%, #ff9b6e, #d94328 55%, #7c201a);
        }

        .floating-produce.tomato::before {
          content: "✳";
          color: #264c29;
          position: absolute;
          top: -12px;
          font-size: 23px;
        }

        .floating-produce.pepper {
          width: clamp(38px, 5vw, 70px);
          aspect-ratio: .8;
          right: 19%;
          top: 39%;
          border-radius: 40% 60% 45% 55%;
          background: linear-gradient(120deg, #f5a34b, #d65b21 70%);
          transform: rotate(25deg);
          animation-delay: -2s;
        }

        .floating-produce.carrot {
          width: clamp(28px, 3.5vw, 48px);
          height: clamp(100px, 12vw, 150px);
          right: 23%;
          bottom: 12%;
          border-radius: 50% 50% 48% 48%;
          background: linear-gradient(90deg, #c45b21, #f5a044 45%, #bd4c1c);
          transform: rotate(-35deg);
          animation-delay: -3s;
        }

        .floating-produce.carrot::before {
          content: "♣";
          position: absolute;
          top: -22px;
          color: #426b38;
          font-size: 35px;
        }

        .floating-produce.leaf {
          width: clamp(38px, 5vw, 68px);
          height: clamp(65px, 8vw, 100px);
          left: 27%;
          bottom: 13%;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(135deg, #a3bd7c, #355d32);
          transform: rotate(35deg);
          animation-delay: -1s;
        }

        .floating-produce.onion {
          width: clamp(42px, 5vw, 68px);
          aspect-ratio: 1;
          right: 30%;
          top: 65%;
          border-radius: 48% 52% 48% 52%;
          background: radial-gradient(circle at 35% 25%, #e9c6a0, #a76e42 80%);
          animation-delay: -4s;
        }

        @keyframes produce-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -18px; }
        }

        .hero-label {
          position: absolute;
          z-index: 7;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: .16em;
          color: rgba(15,46,21,.75);
        }

        .label-left {
          left: 7%;
          top: 64%;
        }

        .label-right {
          right: 7%;
          top: 58%;
          text-align: right;
        }

        .hero-scroll {
          position: absolute;
          z-index: 12;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 9px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(15,46,21,.7);
          opacity: calc(1 - var(--progress) * 4);
        }

        .scroll-line {
          width: 1px;
          height: 38px;
          background: var(--green);
          transform-origin: top;
          animation: scroll-line 1.6s ease-in-out infinite;
        }

        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        .story-copy {
          position: absolute;
          z-index: 8;
          left: 50%;
          top: 50%;
          width: min(700px, 86%);
          transform: translate(-50%, -50%);
          text-align: center;
          opacity: clamp(0, (var(--progress) - .24) * 5, 1);
          pointer-events: none;
        }

        .story-copy h2 {
          font-size: clamp(38px, 6vw, 76px);
          line-height: 1;
          letter-spacing: -.075em;
          font-weight: 500;
          margin: 0;
        }

        .story-copy h2 em {
          font-family: Georgia, serif;
          color: var(--wine);
          font-weight: 400;
        }

        .story-copy p {
          max-width: 380px;
          margin: 22px auto 0;
          font-size: 12px;
          line-height: 1.9;
          color: #566156;
        }

        .story-end {
          position: absolute;
          z-index: 9;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          width: 90%;
          opacity: clamp(0, (var(--progress) - .72) * 4, 1);
          pointer-events: none;
        }

        .story-end p {
          font-size: 10px;
          letter-spacing: .25em;
          text-transform: uppercase;
        }

        .story-end h3 {
          font-size: clamp(34px, 5vw, 62px);
          letter-spacing: -.07em;
          font-weight: 500;
          margin: 12px 0;
        }

        /* GENERAL SECTIONS */

        .section {
          padding: 110px 7%;
        }

        .section-kicker {
          font-size: 9px;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: var(--wine);
          margin-bottom: 18px;
        }

        .section-heading {
          font-size: clamp(35px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -.075em;
          font-weight: 500;
          margin: 0;
        }

        .section-heading em {
          font-family: Georgia, serif;
          font-weight: 400;
          color: var(--wine);
        }

        .section-intro {
          font-size: 12px;
          line-height: 1.9;
          color: var(--muted);
          max-width: 400px;
          margin-top: 18px;
        }

        .section-top {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 46px;
        }

        .text-link {
          font-size: 11px;
          border-bottom: 1px solid var(--green);
          padding-bottom: 7px;
          white-space: nowrap;
        }

        .text-link:hover {
          color: var(--wine);
          border-color: var(--wine);
        }

        /* CATEGORIES */

        .categories-section {
          background: #f0f0ef;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .category-card {
          min-height: 220px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: .3s ease;
        }

        .category-card:hover {
          transform: translateY(-5px);
        }

        .category-symbol {
          font-family: Georgia, serif;
          font-size: 66px;
          line-height: 1;
          opacity: .55;
          align-self: flex-end;
        }

        .category-card h3 {
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -.05em;
          margin: 0 0 8px;
        }

        .category-card p {
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin: 0;
          opacity: .65;
        }

        .category-arrow {
          position: absolute;
          right: 22px;
          bottom: 22px;
          font-size: 18px;
        }

        /* PRODUCTS */

        .products-section {
          background: var(--paper);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .product-card {
          min-width: 0;
        }

        .product-image {
          aspect-ratio: .88;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #d9e1d4;
        }

        .product-art {
          width: 65%;
          height: 65%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, serif;
          font-size: clamp(55px, 7vw, 95px);
          color: rgba(15,46,21,.72);
          transition: transform .4s ease;
        }

        .product-card:hover .product-art {
          transform: scale(1.12) rotate(-5deg);
        }

        .product-card:nth-child(2n) .product-image {
          background: #e6d9cb;
        }

        .product-card:nth-child(3n) .product-image {
          background: #dce4d7;
        }

        .product-card:nth-child(4n) .product-image {
          background: #e8dfcf;
        }

        .product-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--paper);
          padding: 7px 9px;
          font-size: 8px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .product-info {
          padding: 15px 2px 5px;
        }

        .product-category {
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: .13em;
          font-size: 8px;
        }

        .product-info h3 {
          font-size: 15px;
          font-weight: 500;
          margin: 9px 0;
        }

        .product-price {
          font-size: 12px;
          font-weight: 600;
        }

        .product-price small {
          font-size: 9px;
          font-weight: 400;
          color: var(--muted);
        }

        .product-order {
          display: block;
          border: 1px solid var(--line);
          margin-top: 13px;
          text-align: center;
          padding: 11px 8px;
          font-size: 10px;
          transition: .2s ease;
        }

        .product-order:hover {
          background: var(--green);
          color: white;
        }

        /* BUNDLES */

        .bundles-section {
          background: var(--green);
          color: #f1f0e9;
        }

        .bundles-section .section-kicker {
          color: #c9a18b;
        }

        .bundles-section .section-heading em {
          color: #d5ad99;
        }

        .bundles-section .section-intro {
          color: rgba(241,240,233,.65);
        }

        .bundle-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,.2);
          border: 1px solid rgba(255,255,255,.2);
        }

        .bundle-card {
          background: var(--green);
          padding: 35px;
          min-height: 235px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: .25s ease;
        }

        .bundle-card:hover {
          background: #193b20;
        }

        .bundle-number {
          font-size: 10px;
          letter-spacing: .2em;
          color: #c9a18b;
        }

        .bundle-card h3 {
          font-size: 26px;
          letter-spacing: -.06em;
          font-weight: 500;
          margin: 20px 0 8px;
        }

        .bundle-card p {
          font-size: 11px;
          color: rgba(241,240,233,.65);
          line-height: 1.8;
          margin: 0;
        }

        .bundle-items {
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-top: 22px;
          color: #d5ad99;
        }

        .bundle-card a {
          font-size: 10px;
          align-self: flex-start;
          margin-top: 20px;
          border-bottom: 1px solid rgba(255,255,255,.5);
          padding-bottom: 5px;
        }

        /* WHY AMELIA'S */

        .why-section {
          background: #f0f0ef;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 55px;
        }

        .why-item {
          border-top: 1px solid var(--line);
          padding-top: 20px;
        }

        .why-number {
          font-size: 10px;
          color: var(--wine);
          letter-spacing: .15em;
        }

        .why-item h3 {
          font-size: 19px;
          font-weight: 500;
          letter-spacing: -.05em;
          margin: 25px 0 12px;
        }

        .why-item p {
          font-size: 11px;
          line-height: 1.9;
          color: var(--muted);
          max-width: 270px;
        }

        /* BRAND STORY */

        .about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
          background: #dedfd9;
        }

        .about-visual {
          min-height: 460px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 45%, #a8b99b, #627d5b 60%, #29472b);
        }

        .about-visual::before,
        .about-visual::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.25);
          width: 65%;
          aspect-ratio: 1;
          left: 17%;
          top: 18%;
        }

        .about-visual::after {
          width: 45%;
          left: 27%;
          top: 28%;
        }

        .about-visual-word {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, serif;
          font-size: clamp(75px, 12vw, 160px);
          color: rgba(255,255,255,.7);
          letter-spacing: -.1em;
        }

        .about-content {
          padding: 90px 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-content .section-heading {
          max-width: 480px;
        }

        .about-content > p {
          font-size: 12px;
          line-height: 2;
          color: #626b61;
          max-width: 400px;
          margin: 25px 0;
        }

        .button-dark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--green);
          color: white !important;
          padding: 15px 22px;
          font-size: 10px;
          align-self: flex-start;
          transition: .2s ease;
        }

        /* DELIVERY STRIP */

        .delivery-section {
          padding: 75px 7%;
          background: #f0f0ef;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .delivery-section h2 {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 500;
          letter-spacing: -.07em;
          margin: 0;
        }

        .delivery-section h2 em {
          font-family: Georgia, serif;
          color: var(--wine);
          font-weight: 400;
        }

        .delivery-section p {
          font-size: 11px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 310px;
        }

        /* FOOTER */

        .footer {
          padding: 65px 7% 25px;
          background: #101f13;
          color: #f0efe8;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          padding-bottom: 60px;
        }

        .footer-brand .logo {
          font-size: 37px;
        }

        .footer-brand .logo small {
          color: #b7c0b4;
        }

        .footer-brand p {
          font-family: Georgia, serif;
          font-size: 20px;
          color: #d5ad99;
          margin-top: 24px;
        }

        .footer-links {
          display: flex;
          gap: 75px;
        }

        .footer-column h4 {
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #c9a18b;
          margin: 0 0 20px;
        }

        .footer-column a,
        .footer-column p {
          display: block;
          font-size: 11px;
          color: rgba(240,239,232,.7);
          margin: 0 0 13px;
          line-height: 1.6;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.17);
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: rgba(240,239,232,.5);
          font-size: 9px;
        }

        @media (max-width: 800px) {
          .navbar {
            height: 70px;
            padding: 0 5%;
          }

          .nav-links {
            display: none;
          }

          .nav-actions {
            gap: 10px;
          }

          .hero-stage {
            min-height: 620px;
          }

          .hero-heading {
            top: 20%;
          }

          .hero-heading h1 {
            font-size: clamp(48px, 12vw, 86px);
          }

          .cabbage-island {
            width: 90vw;
            top: 56%;
          }

          .floating-produce.tomato {
            left: 5%;
            top: 56%;
          }

          .floating-produce.pepper {
            right: 6%;
            top: 43%;
          }

          .floating-produce.carrot {
            right: 10%;
            bottom: 12%;
          }

          .floating-produce.leaf {
            left: 8%;
            bottom: 14%;
          }

          .floating-produce.onion {
            right: 24%;
            top: 70%;
          }

          .hero-label {
            display: none;
          }

          .section {
            padding: 80px 6%;
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-card {
            min-height: 180px;
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px 12px;
          }

          .why-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .why-item {
            display: grid;
            grid-template-columns: 35px 1fr;
            column-gap: 12px;
          }

          .why-number {
            grid-row: span 2;
          }

          .why-item h3 {
            margin: 0 0 8px;
          }

          .why-item p {
            margin: 0;
          }

          .about-section {
            grid-template-columns: 1fr;
          }

          .about-visual {
            min-height: 350px;
          }

          .about-content {
            padding: 70px 7%;
          }

          .delivery-section {
            align-items: flex-start;
            flex-direction: column;
            padding: 65px 7%;
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-links {
            gap: 45px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .announcement {
            font-size: 8px;
          }

          .logo {
            font-size: 25px;
          }

          .nav-order {
            padding: 11px 13px;
            font-size: 10px;
          }

          .hero-topline {
            top: 22px;
            font-size: 7px;
          }

          .hero-heading {
            top: 23%;
          }

          .hero-heading h1 {
            font-size: 53px;
          }

          .hero-subtitle {
            font-size: 10px;
            max-width: 280px;
          }

          .cabbage-island {
            width: 108vw;
            top: 57%;
          }

          .story-copy h2 {
            font-size: 42px;
          }

          .section-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .category-card {
            min-height: 155px;
            padding: 17px;
          }

          .category-card h3 {
            font-size: 15px;
          }

          .category-symbol {
            font-size: 48px;
          }

          .product-info h3 {
            font-size: 14px;
          }

          .bundle-grid {
            grid-template-columns: 1fr;
          }

          .bundle-card {
            min-height: 210px;
            padding: 27px;
          }

          .footer-links {
            gap: 35px;
          }

          .footer-bottom {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="announcement">
        Fresh vegetables, thoughtfully selected · Abuja, Nigeria
      </div>

      <header className="navbar">
        <a href="#home" className="logo">
          Amelia<span>'s</span>
          <small>Always fresh</small>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="#shop">Explore produce</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="nav-order">
            Order now ↗
          </a>
        </div>
      </header>

      {/* CINEMATIC SCROLL HERO */}

      <section className="hero-story" id="home" ref={storyRef}>
        <div className="hero-stage">
          <div className="hero-grain" />

          <div className="hero-topline">
            <span>Amelia's — Always fresh</span>
            <span>Fresh produce · Abuja, Nigeria</span>
          </div>

          <div className="hero-heading">
            <div className="hero-eyebrow">A fresher way to eat</div>
            <h1>
              Freshness, <em>straight</em>
              <br />
              from the source.
            </h1>
            <p className="hero-subtitle">
              Carefully selected vegetables for everyday meals,
              special occasions and everything in between.
            </p>
          </div>

          <div className="hero-world">
            <div className="hero-cloud cloud-one" />
            <div className="hero-cloud cloud-two" />
            <div className="hero-cloud cloud-three" />

            <div className="island-shadow" />

            <div className="cabbage-island">
              <img src={cabbageImage} alt="Fresh green cabbage" />
              <div className="cabbage-shine" />
            </div>

            <div className="floating-produce tomato" />
            <div className="floating-produce pepper" />
            <div className="floating-produce carrot" />
            <div className="floating-produce leaf" />
            <div className="floating-produce onion" />

            <div className="hero-label label-left">
              Selected with care
            </div>

            <div className="hero-label label-right">
              Nature's goodness<br />for your kitchen
            </div>
          </div>

          <div className="story-copy">
            <h2>
              Good food begins<br />
              with <em>good produce.</em>
            </h2>
            <p>
              From leafy greens to everyday essentials, we bring
              together the vegetables that make your meals worth
              looking forward to.
            </p>
          </div>

          <div className="story-end">
            <p>From Amelia's to your kitchen</p>
            <h3>Make every meal a little fresher.</h3>
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="section categories-section" id="shop">
        <div className="section-top">
          <div>
            <div className="section-kicker">Explore our selection</div>
            <h2 className="section-heading">
              A little bit of <em>everything.</em>
            </h2>
            <p className="section-intro">
              From the greens you know and love to the ingredients
              that bring new life to your kitchen.
            </p>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link">
            Shop all produce ↗
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="category-card"
              style={{ backgroundColor: category.color }}
              key={category.name}
            >
              <span className="category-symbol">{category.symbol}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}

      <section className="section products-section">
        <div className="section-top">
          <div>
            <div className="section-kicker">The everyday favourites</div>
            <h2 className="section-heading">
              Fresh picks, <em>every time.</em>
            </h2>
            <p className="section-intro">
              Some kitchen essentials never go out of style.
              Start with a few of our popular picks.
            </p>
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-link">
            View all products ↗
          </a>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                {product.tag && (
                  <span className="product-tag">{product.tag}</span>
                )}

                <div className="product-art">
                  {["❋", "✳", "❧", "✿", "❀", "❋", "✽", "◉"][index]}
                </div>
              </div>

              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3>{product.name}</h3>
                <div className="product-price">
                  {product.price} <small>/ {product.unit.replace("per ", "")}</small>
                </div>

                <a
                  href={`${whatsappLink}&product=${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="product-order"
                >
                  Order this product ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BUNDLES */}

      <section className="section bundles-section">
        <div className="section-top">
          <div>
            <div className="section-kicker">A little kitchen planning</div>
            <h2 className="section-heading">
              Your favourites, <em>together.</em>
            </h2>
            <p className="section-intro">
              Thoughtfully grouped ingredients to make preparing
              your favourite meals easier.
            </p>
          </div>
        </div>

        <div className="bundle-grid">
          {bundles.map((bundle) => (
            <article className="bundle-card" key={bundle.name}>
              <div>
                <div className="bundle-number">BUNDLE / {bundle.number}</div>
                <h3>{bundle.name}</h3>
                <p>{bundle.description}</p>
                <div className="bundle-items">{bundle.items}</div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Enquire about this bundle ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* WHY AMELIA'S */}

      <section className="section why-section">
        <div className="section-kicker">The Amelia's difference</div>
        <h2 className="section-heading">
          More care in every <em>choice.</em>
        </h2>

        <div className="why-grid">
          <div className="why-item">
            <span className="why-number">01 / QUALITY</span>
            <h3>Selected with care</h3>
            <p>
              We believe good meals begin with good ingredients.
              Our focus is on bringing quality vegetables to your table.
            </p>
          </div>

          <div className="why-item">
            <span className="why-number">02 / CONVENIENCE</span>
            <h3>Less market stress</h3>
            <p>
              Find the vegetables you need without having to
              make every market trip yourself.
            </p>
          </div>

          <div className="why-item">
            <span className="why-number">03 / SERVICE</span>
            <h3>Made for your kitchen</h3>
            <p>
              Whether you're cooking at home or preparing for
              a crowd, we're here to help you find what you need.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}

      <section className="about-section" id="about">
        <div className="about-visual">
          <div className="about-visual-word">A.</div>
        </div>

        <div className="about-content">
          <div className="section-kicker">A little about us</div>
          <h2 className="section-heading">
            Bringing freshness closer to <em>home.</em>
          </h2>

          <p>
            Amelia's is built around a simple idea: getting fresh
            vegetables for your kitchen should feel easy. We bring
            together everyday essentials and a variety of produce
            for the meals you love preparing.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="button-dark">
            Get in touch ↗
          </a>
        </div>
      </section>

      {/* DELIVERY */}

      <section className="delivery-section">
        <div>
          <div className="section-kicker">Freshness, made convenient</div>
          <h2>
            Your kitchen.<br />
            Our <em>fresh picks.</em>
          </h2>
        </div>

        <div>
          <p>
            Looking for vegetables in Abuja? Reach out to Amelia's
            to enquire about available produce, orders and delivery.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button-dark"
          >
            Place an enquiry ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Amelia<span>'s</span>
              <small>Always fresh</small>
            </a>

            <p>Good food starts here.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#about">About us</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Get in touch</h4>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Amelia's. All rights reserved.</span>
          <span>ALWAYS FRESH.</span>
        </div>
      </footer>
    </main>
  );
}


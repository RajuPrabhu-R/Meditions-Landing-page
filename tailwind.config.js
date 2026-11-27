tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['Fraunces', 'Georgia', 'serif'],
            sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          },
          colors: {
            alabaster: '#FAF9F6',     /* Primary warm off-white surface */
            sagemist: '#E4ECE7',      /* Soft misty sage tint */
            sand: '#F2EFE9',          /* Warm stone-sand for alternating sections */
            sunriseglow: '#F5E2D6',   /* Soft warm sunrise tint */
            forest: {
              DEFAULT: '#1E3A2F',     /* Deep grounding forest green */
              dark: '#152A22',        /* Darker forest shade for hover states */
              light: '#2C5243',       /* Mid-tone botanical green */
            },
            sage: {
              DEFAULT: '#7C9A82',     /* Calming muted sage leaf accent */
              soft: '#E4ECE7',        /* Subtle sage tint for icon containers */
            },
            terracotta: {
              DEFAULT: '#D98A6C',     /* Warm sunset terracotta accent */
              soft: '#F8EBE5',        /* Soft blush-terracotta tint */
            },
            charcoal: '#1C2420',      /* High-contrast organic ink for headings & text */
            slate: '#5A6560',         /* Muted slate-green for secondary body copy */
          },
          boxShadow: {
            soft: '0 12px 32px -10px rgba(28, 36, 32, 0.07)',
            elevated: '0 24px 52px -14px rgba(30, 58, 47, 0.18)',
            glass: '0 20px 50px -12px rgba(30, 58, 47, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
          },
        },
      },
    };

# Preferred Title Company LLC

Responsive Next.js homepage for preferredtitlecompany.com.

Includes navigation, hero, services, company overview, all 21 New Jersey counties, call to action, direct email contacts, and footer.

## Run locally

Requires Node.js 22.13 or newer.

    npm ci
    npm run dev

Open http://127.0.0.1:5173.

## Production

    npm run build

The complete static website is generated in `out/`. It can be hosted without a running Node server. The Sites registration is preserved in `.openai/hosting.json`. Production deployment: https://preferred-title-company.ececere1327.chatgpt.site . Public access and custom-domain DNS are configured separately in Sites and GoDaddy.

## Content

Edit `app/page.tsx` for copy, county coverage, and email contacts; `app/globals.css` for responsive styling; and `app/layout.tsx` for search metadata.

The four service descriptions are proposed marketing copy and should be reviewed before a public launch. No phone, street address, licenses, affiliations, or testimonials were invented.

## Photo credit

House photograph by Curtis Adams on Pexels:
https://www.pexels.com/photo/house-with-green-grass-on-the-lawn-7601179/
Used under the Pexels license: https://www.pexels.com/license/
The photograph illustrates residential real estate; it is not a claim about a company office or completed transaction.


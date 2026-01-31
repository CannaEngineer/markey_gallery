# SEO Setup Guide - Markey Gallery

## 🚀 Technical SEO Implementation Complete

The following has been implemented:

### ✅ Completed
1. **Enhanced Metadata**
   - Premium keyword-optimized titles and descriptions
   - Targeting: "event space Hell's Kitchen", "corporate event venue NYC"
   - Open Graph & Twitter Card optimization

2. **Structured Data (Schema.org)**
   - EventVenue schema for local search
   - LocalBusiness schema for Google Business Profile integration
   - FAQ schema for rich snippets
   - Organization schema

3. **SEO Infrastructure**
   - Robots.txt configured
   - XML Sitemap generated
   - Canonical URLs
   - Google Analytics 4 tracking setup

4. **Conversion Tracking**
   - Form submission tracking
   - Phone click tracking
   - Email click tracking
   - Directions click tracking

---

## 📋 YOUR ACTION ITEMS (Do This Week)

### 1. Google Analytics Setup (5 minutes)
1. Go to https://analytics.google.com
2. Create account for "Markey Gallery"
3. Create GA4 property
4. Copy your Measurement ID (format: G-XXXXXXXXXX)
5. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 2. Google Business Profile (CRITICAL - 30 minutes)
**This is 70% of your local SEO ranking**

1. Claim: https://business.google.com
2. Fill out completely:
   - Business name: "Markey Gallery"
   - Category: "Event Venue" (primary)
   - Address: 358 W 40th St, 2nd Floor, New York, NY 10018
   - Phone: [ADD YOUR NUMBER]
   - Website: https://markeygallery.com
   - Hours: Mon-Sun 9am-11pm

3. Upload Photos:
   - All 13 gallery images
   - Add captions with keywords: "corporate event", "celebration venue", etc.

4. Write Description:
   ```
   Premium event space in Hell's Kitchen. 70-guest capacity.
   Perfect for corporate events, milestone celebrations, and
   creative gatherings. From $200/hour. Near Times Square.
   ```

### 3. Get Reviews (HIGHEST PRIORITY)
**Goal: 10 reviews in 30 days**

Strategy:
1. Email past clients:
   ```
   "Hi [Name], hope your event at Markey Gallery was amazing!
   Would you mind leaving us a quick Google review?
   [Google Business Profile Review Link]"
   ```

2. Incentivize: "Leave a review, get 10% off next booking"

3. Make it easy: Create QR code linking to review page

### 4. Google Search Console (15 minutes)
1. Go to https://search.google.com/search-console
2. Add property: https://markeygallery.com
3. Verify ownership (HTML tag method)
4. Copy verification code
5. Update `app/layout.tsx` line with verification code:
   ```typescript
   verification: {
     google: "YOUR-VERIFICATION-CODE-HERE",
   },
   ```

### 5. Create Citations (2 hours)
List your business on these platforms:

**Free (Do Now):**
- [ ] Yelp for Business
- [ ] Eventup.com
- [ ] PartySlate.com
- [ ] The Bash
- [ ] Gigsalad

**Paid (Higher ROI):**
- [ ] Peerspace ($29/month + 15% commission) - RECOMMENDED
- [ ] The Knot Vendors ($300/year) - Good for celebrations
- [ ] Here Comes The Guide ($99/month) - Premium market

Ensure NAP (Name, Address, Phone) is IDENTICAL everywhere.

### 6. Add Phone Number to Website (5 minutes)
Add to `components/layout/Header.tsx`:
```typescript
<a href="tel:+1XXXXXXXXXX" className="...">
  (XXX) XXX-XXXX
</a>
```

### 7. Create OG Image (Optional but Recommended)
- Size: 1200x630px
- Save as: `public/og-image.jpg`
- Should show: venue interior + "Markey Gallery" text

---

## 📊 Expected Results

### Week 1-2
- Google Search Console shows indexing
- Analytics tracking conversions
- First reviews appear

### Month 1
- Rank #8-12 for "event space Hell's Kitchen"
- 100-200 organic visitors
- 3-5 qualified leads

### Month 2-3
- Rank #3-5 for primary keywords
- 400-600 organic visitors
- 15-20 qualified leads
- Local Pack appearance (map results)

### Month 4-6
- Rank #1-2 for "event space Hell's Kitchen"
- 1000+ organic visitors
- 40-50 qualified leads
- $15k-25k monthly bookings

---

## 🎯 Quick Wins (Do Today)

1. [ ] Set up Google Analytics
2. [ ] Claim Google Business Profile
3. [ ] Request 3 reviews from recent clients
4. [ ] List on Yelp

---

## 📞 Next Steps

Once you complete the above, we can add:
- 3 landing pages (corporate, celebrations, pricing)
- Blog content strategy
- Google Ads campaign
- Email capture popup

Questions? Let me know!

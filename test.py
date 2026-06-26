from agents.website_agent import WebsiteAgent
from schemas.website_schema import BusinessInput

business = BusinessInput(
    business_name="Rudy Fitness",
    category="Gym",
    city="Goa",
    target_audience="College students and professionals",
    tone="Modern and energetic",
    phone="9876543210",
    email="contact@rudyfitness.com",
    address="Panjim, Goa",
    description="A premium gym offering strength training, cardio, group classes and nutrition coaching."
)

website = WebsiteAgent.generate_website(business)

print(type(website))
print()

print("Hero Title:")
print(website.hero_title)

print("\nHero Subtitle:")
print(website.hero_subtitle)

print("\nAbout:")
print(website.about)

print("\nServices:")
for service in website.services:
    print(f"- {service.title}")
    print(f"  {service.description}")

print("\nFAQs:")
for faq in website.faq:
    print(f"Q: {faq.question}")
    print(f"A: {faq.answer}")

print("\nTestimonials:")
for testimonial in website.testimonials:
    print(f"{testimonial.name}: {testimonial.review}")

print("\nCTA:")
print(website.cta)

print("\nPrimary Color:")
print(website.primary_color)
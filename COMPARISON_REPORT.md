# AI Code Comparison Report

**Student Name:** Salman Ahmed  
**Roll Number:** 22i-0743  
**Course:** Web Development  
**Assignment:** Login System using Express.js, MongoDB, and Sessions

---

## Project Overview

This report compares the code I developed with AI assistance against what pure AI-generated code would look like, and what I might have written manually as a beginner. The goal is to understand the differences in approach, quality, and learning outcomes.

**Project Title:** Login System with User Authentication  
**GitHub Repository:** https://github.com/SalmanAh/MongoDB_System  
**Technologies Used:** Node.js, Express.js, MongoDB (Mongoose), express-session, bcrypt, HTML/CSS

---

## Code Comparison Analysis

### Feature-by-Feature Comparison

| Feature | My Code (AI-Assisted) | Pure AI Generated | Manual Beginner Code |
|---------|----------------------|-------------------|---------------------|
| **Structure** | Advanced - Organized into separate files (User.js, index.js, public folder) | Advanced - Similar modular structure | Simple - Would put everything in one file |
| **Readability** | Easy - Clear variable names with helpful comments | Easy - Professional documentation style | Medium - Basic naming, few comments |
| **Security** | Good - Implemented bcrypt for password hashing and secure session management | Good - Same security standards | Basic - Might store passwords in plain text |
| **Session Handling** | Yes - Configured express-session properly with timeouts | Yes - Similar implementation | No - Would struggle to implement this |
| **Error Handling** | Good - Try-catch blocks with user-friendly error messages | Good - Comprehensive error coverage | Basic - Probably just console.log errors |
| **Frontend Design** | Advanced - Responsive HTML/CSS with animations and modern styling | Basic - Functional but plain forms | Basic - Simple HTML without much styling |
| **Code Organization** | Excellent - Separate User class, public folder for frontend files | Good - Follows modular patterns | Poor - Everything mixed together |
| **Database Schema** | Proper - Mongoose schema with field validation | Proper - Industry standard approach | Basic - No validation, just storing data |
| **Middleware Usage** | Yes - Created authentication middleware to protect routes | Yes - Standard middleware pattern | No - Would manually check in each route |
| **Best Practices** | Followed - Used async/await, proper HTTP status codes, RESTful design | Followed - Professional standards | Partial - Would learn through mistakes |

---

## What I Learned Through This Process

Working with AI assistance taught me several important concepts that I wouldn't have discovered on my own right away:

**1. Password Security**  
I learned that storing passwords in plain text is a major security risk. The AI helped me implement bcrypt, which hashes passwords before saving them to the database. This means even if someone accesses the database, they can't see actual passwords.

**2. Session Management**  
Understanding how sessions work was challenging at first. The AI explained that express-session creates a unique session ID for each logged-in user, which is stored in a cookie. This is how the server remembers who's logged in without asking for credentials on every page.

**3. Middleware Pattern**  
I created an authentication middleware function that checks if a user is logged in before allowing access to protected routes like the dashboard. This is much cleaner than repeating the same check in every route.

**4. Async/Await for Database Operations**  
Database operations take time, so I learned to use async/await to handle them properly. This prevents the code from moving forward before the database responds.

**5. Project Structure**  
Separating the User class into its own file and keeping frontend files in a public folder makes the code much easier to maintain and understand. This is something I wouldn't have thought about initially.

**6. Error Handling**  
Using try-catch blocks and sending meaningful error messages to users is important. Instead of just crashing, the application now tells users what went wrong in a friendly way.

**7. RESTful API Design**  
I learned the correct HTTP methods: POST for creating/modifying data (register, login) and GET for retrieving data (dashboard). This follows web standards.

**8. Frontend-Backend Integration**  
Using the fetch API to connect HTML forms with backend routes was new to me. The AI showed me how to send JSON data and handle responses properly.

---

## Honest Comparison: AI-Assisted vs. Manual Development

**If I had written this manually without AI:**
- It would have taken me much longer, probably several hours with lots of trial and error
- I likely would have stored passwords in plain text initially, not knowing about security risks
- The code would be messier, probably all in one file
- I might have struggled with sessions and given up on that feature
- The frontend would be very basic, just functional forms without styling
- I would have spent a lot of time debugging simple mistakes

**With AI assistance:**
- Development took about 45 minutes
- The code follows professional standards and security best practices
- Everything is well-organized and documented
- I learned the "right way" to do things from the start
- The final product looks professional and works smoothly

**The key difference:**  
AI didn't just give me code to copy. It explained WHY things are done a certain way. Now I understand the concepts and can modify or extend the system myself. If I need to add a new feature like "forgot password," I know where to start and what patterns to follow.

---

## Code Quality Assessment

**My AI-Assisted Code:**
- Production-ready and secure
- Well-structured with clear separation of concerns
- Includes proper error handling and user feedback
- Frontend is polished with modern design
- Ready to deploy and use in a real application

**What Manual Beginner Code Would Look Like:**
- Functional but with security vulnerabilities
- Harder to maintain and extend
- Limited error handling
- Basic appearance
- Would need significant refactoring before real-world use

**Learning Value:**
The AI assistance was extremely valuable because it taught me professional patterns while I was building. Instead of learning bad habits and having to unlearn them later, I started with good practices. However, I made sure to understand each part rather than just copying blindly.

---

## Conclusion

This project taught me that AI is a powerful learning tool when used correctly. The key is not just getting code that works, but understanding why it works that way. I now feel confident that I could build a similar system on my own, or add new features to this one, because I understand the underlying concepts.

The code I submitted is more advanced than what I could have written alone at this stage, but that's exactly the point of learning. By seeing professional-quality code and having it explained, I've accelerated my learning curve significantly.

**Main Takeaway:**  
AI assistance is most valuable when you use it to learn and understand, not just to complete assignments. I made sure to ask questions and understand each component, which means I've genuinely learned from this experience.

---

## Technical Implementation Summary

**Database:** MongoDB Atlas (Cloud)  
**Database Name:** studentDB  
**Collection:** users  
**User Schema:** username (String), password (String, hashed)

**Routes Implemented:**
- POST /register - Creates new user account
- POST /login - Authenticates user and creates session
- GET /dashboard - Protected route, shows welcome message
- GET /logout - Destroys session and logs out user

**Security Features:**
- Password hashing with bcrypt (10 salt rounds)
- Session-based authentication
- Protected routes with middleware
- Input validation

**Frontend Pages:**
- index.html - Landing page
- register.html - User registration form
- login.html - User login form
- dashboard.html - Protected user dashboard

**Total Development Time:** Approximately 45 minutes  
**Total Lines of Code:** ~300 lines across all files  
**Git Commits:** 6 commits showing development progression

---

**Submitted by:**  
Salman Ahmed  
Roll # 22i-0743  
Date: March 6, 2026

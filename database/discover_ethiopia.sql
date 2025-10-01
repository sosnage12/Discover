-- Create database
CREATE DATABASE discover_ethiopia;
USE discover_ethiopia;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, -- Store hashed password
    country_origin VARCHAR(50) NOT NULL,
    travel_interest VARCHAR(50),
    phone_country_code VARCHAR(10),
    phone_number VARCHAR(20),
    travel_preferences TEXT, -- Stores multiple checkboxes (comma-separated)
    travel_experience TEXT,
    agreed_terms BOOLEAN NOT NULL DEFAULT FALSE,
    subscribed_newsletter BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example Insert
INSERT INTO users (
    first_name, last_name, email, password_hash, country_origin,
    travel_interest, phone_country_code, phone_number,
    travel_preferences, travel_experience, agreed_terms, subscribed_newsletter
) VALUES (
    'John', 'Doe', 'john@example.com', 'hashed_password_here', 'Ethiopia',
    'Cultural Heritage', '+251', '912345678',
    'Historical Sites, Adventure', 'Visited Lalibela in 2023.', TRUE, TRUE
);

-- Roles Table
CREATE TABLE roles (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(20) NOT NULL UNIQUE
);

-- Users Table
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    email NVARCHAR(100),
    preferred_name NVARCHAR(50),
    role_id INT,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Books Table
CREATE TABLE books (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(100) NOT NULL,
    author NVARCHAR(100) NOT NULL,
    description NVARCHAR(MAX),
    description_quill NVARCHAR(MAX),
    isbn NVARCHAR(20),
    picture VARBINARY(MAX),
    picture_url NVARCHAR(255),
    archived BIT NOT NULL,
    date_published DATE,
    genre NVARCHAR(255),
    created_at DATETIME2 DEFAULT GETDATE() NOT NULL,
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- StoreItems Table
CREATE TABLE storeitems (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    description NVARCHAR(MAX),
    picture VARBINARY(MAX),
    picture_url NVARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Reviews Table
CREATE TABLE reviews (
    id INT IDENTITY(1,1) PRIMARY KEY,
    book_id INT,
    user_id INT,
    rating INT NOT NULL,
    content NVARCHAR(MAX),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Discussions Table
CREATE TABLE discussions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    book_id INT,
    user_id INT,
    title NVARCHAR(100) NOT NULL,
    topic_tag NVARCHAR(255),
    content NVARCHAR(MAX),
    content_quill NVARCHAR(MAX),
    archived BIT DEFAULT 0,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Comments Table
CREATE TABLE comments (
    id INT IDENTITY(1,1) PRIMARY KEY,
    discussion_id INT,
    user_id INT,
    content NVARCHAR(MAX),
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (discussion_id) REFERENCES discussions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
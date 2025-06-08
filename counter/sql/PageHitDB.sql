CREATE TABLE IF NOT EXISTS page_hits (
                                         path VARCHAR(255) PRIMARY KEY,
                                         hits BIGINT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

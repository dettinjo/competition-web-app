## Wettbewerbs-Webanwendung

Eine umfassende Full-Stack-Plattform für die Verwaltung von Online-Programmierwettbewerben. Sie bietet Teilnehmern eine reibungslose Möglichkeit, ihre Beiträge einzureichen, Juroren können Einreichungen bewerten, und Administratoren verwalten das gesamte System. Das Projekt entstand als Universitätsaufgabe an der University of the West of Scotland und demonstriert ein breites Full-Stack-Kompetenzspektrum.

### Hauptfunktionen

- **Rollenbasierte Zugriffskontrolle:** Unterschiedliche Benutzerrollen (USER, JUDGE, ADMIN) mit eigenen Berechtigungen und Ansichten.
- **Benutzerauthentifizierung:** Sichere Registrierung und Anmeldung mit JWT und `bcryptjs` für Password-Hashing.
- **Wettbewerbsmanagement:** Administratoren erstellen und verwalten Wettbewerbsdetails.
- **Einreichungssystem:** Angemeldete Benutzer können Beiträge zu aktiven Wettbewerben einreichen.
- **Bewertung und Jurierung:** Juroren haben ein dediziertes Portal zur Bewertung aller Einreichungen.
- **Dynamisches Frontend:** Eine responsive Benutzeroberfläche mit Next.js und Material-UI.

### Technische Highlights

Das Backend ist eine GraphQL-API auf Basis von Node.js und Express.js mit MongoDB (über Mongoose) als Datenspeicher. Das Frontend nutzt Apollo Client für das Datenmanagement und die React Context API für den globalen Zustand. Der gesamte Stack ist mit Docker Compose containerisiert und für ein Deployment auf Heroku konfiguriert.

### Ergebnis

Ein Universitätsprojekt zur praktischen Anwendung sicherer Multi-User-Anwendungsarchitekturen. Wichtige Erkenntnisse waren das Design eines GraphQL-Schemas von Grund auf, die Implementierung rollenbasierter JWT-Authentifizierung und die Orchestrierung eines Multi-Service-Stacks mit Docker Compose.

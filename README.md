# The Palak Group - Website Monorepo

A multi-website monorepo for **The Palak Group** and its subsidiary companies, built with Vite, Turborepo, and deployed on Cloudflare Pages.

## 🏢 Companies

| Website | Domain | Description |
|---------|--------|-------------|
| **The Palak Group** | `palakgroup.co.ke` | Umbrella/parent company |
| **Palak Elevators** | `palakvators.co.ke` | Elevator supply, installation & maintenance |
| **Preedos Kenya** | `preedos.co.ke` | Elevator distribution & services |
| **Palak Steel Mills** | `psml.ke` | Steel bar manufacturing |
| **Palak Developers** | `palakdevelopers.co.ke` | Building & construction |

## 📁 Project Structure

```
palak/
├── apps/                    # Individual websites
│   ├── palak-group/         # Umbrella company site
│   ├── palak-elevators/     # Elevator services
│   ├── preedos-kenya/       # Elevator distribution
│   ├── palak-steel/         # Steel manufacturing
│   └── palak-developers/    # Construction company
├── packages/                # Shared code
│   ├── ui/                  # Shared components
│   ├── styles/              # Design system
│   └── utils/               # Utility functions
├── workers/                 # Cloudflare Workers
│   └── contact-form/        # Form handler
└── docs/                    # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Installation

```bash
# Install dependencies
pnpm install

# Start all sites in development
pnpm dev

# Start a specific site
pnpm dev:palak-steel
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all sites in development mode |
| `pnpm build` | Build all sites for production |
| `pnpm dev:palak-group` | Start Palak Group site only |
| `pnpm dev:palak-elevators` | Start Palak Elevators site only |
| `pnpm dev:preedos-kenya` | Start Preedos Kenya site only |
| `pnpm dev:palak-steel` | Start Palak Steel site only |
| `pnpm dev:palak-developers` | Start Palak Developers site only |

## 🎨 Design System

Each company has its own brand colors while sharing common components:

- **Palak Group**: Navy Blue + Gold
- **Palak Elevators**: Royal Blue
- **Preedos Kenya**: Emerald Green
- **Palak Steel Mills**: Steel Red + Gray
- **Palak Developers**: Construction Orange

## 🌐 Deployment

Sites are deployed to Cloudflare Pages with automatic deployments on push to `main`.

## 📄 License

Private - All rights reserved.

# AskMyMoney - Project Summary

## Business Purpose

AskMyMoney is a Model Context Protocol (MCP) server that enables AI assistants to access and analyze financial data through the Plaid API. It acts as a bridge between Large Language Models (LLMs) and users' financial accounts, allowing AI tools like Claude, Cursor, and other MCP-compatible clients to provide intelligent financial insights, answer questions about spending, and help with money management.

## What It Does

This server provides AI assistants with the ability to:

- **Connect Bank Accounts**: Initiate secure connections to financial institutions via Plaid Link
- **Query Account Balances**: Retrieve real-time balance information across checking, savings, credit cards, and investment accounts
- **Analyze Transactions**: Access and search transaction history within specified date ranges
- **Generate Spending Insights**: Automatically categorize and summarize spending patterns by category (groceries, dining, transportation, etc.)
- **Monitor Account Health**: Detect potential issues like low balances, overdrafts, or high credit card utilization

## Use Cases

### Personal Finance Assistant
Users can ask natural language questions like:
- "How much did I spend on groceries last month?"
- "What's my checking account balance?"
- "Am I close to any overdrafts?"
- "Show me my largest transactions this week"

### Financial Planning
- Track spending trends over time
- Identify areas of overspending
- Monitor budget adherence
- Get alerts for unusual account activity

### Multi-Account Management
- View consolidated balances across all accounts
- Compare spending across different time periods
- Analyze cash flow patterns

## Technical Architecture

### MCP Server Implementation
Built using FastMCP (TypeScript framework for MCP servers), this server exposes:
- **Tools**: Executable functions that LLMs can call (e.g., `get_transactions`, `check_account_health`)
- **Resources**: Data endpoints that LLMs can access
- **Prompts**: Reusable prompt templates for consistent AI interactions

### Plaid API Integration
- Uses Plaid's industry-standard banking API for secure financial data access
- Supports 12,000+ financial institutions
- Implements OAuth-style token flow for security
- Handles token exchange and credential management

### Deployment Modes
1. **Stdio Transport**: Direct process communication for local development tools (Cursor, Claude Desktop)
2. **HTTP/SSE Transport**: Network-accessible server for remote deployments and team collaboration

## Security Model

### Authentication Flow
1. User authenticates with their financial institution via Plaid Link UI
2. Plaid returns a temporary public token
3. Server exchanges public token for permanent access token
4. Access token is required for all subsequent data requests

### Data Privacy
- Server never sees or stores user bank credentials
- Access tokens should be encrypted at rest in production
- All communication with Plaid uses HTTPS
- Supports sandbox environment for testing without real financial data

## Technology Stack

- **Runtime**: Node.js with TypeScript
- **MCP Framework**: FastMCP
- **Financial API**: Plaid API
- **Validation**: Zod schemas
- **Module System**: ESM (ES Modules)
- **Package Manager**: pnpm

## Environment Support

- **Sandbox**: Testing with mock data (no real bank connections)
- **Development**: Limited set of test institutions
- **Production**: Full access to 12,000+ institutions

## Key Features

### Financial Data Access
- Real-time balance queries
- Transaction history with date filtering
- Account metadata (type, name, institution)
- Available credit and credit utilization

### Intelligent Analysis
- Automatic spending categorization (uses Plaid's category taxonomy)
- Total spending calculations by category
- Transaction counting and averaging
- Trend identification

### Health Monitoring
- Low balance warnings (< $100)
- Negative balance detection
- Credit utilization alerts (> 30% usage)
- Overdraft protection insights

## Business Value

### For End Users
- Conversational access to financial data through AI assistants
- Automated financial insights without manual data entry
- Proactive alerts about account issues
- Time savings through natural language queries

### For Developers
- Ready-to-use financial data integration for AI applications
- Standardized MCP interface for LLM tools
- Abstraction over complex Plaid API details
- Extensible architecture for custom financial features

### For Organizations
- Enables AI-powered financial assistants without building from scratch
- Secure, industry-standard banking integration
- Scalable architecture (stdio for single-user, HTTP for multi-user)
- Open-source foundation for customization

## Future Potential

This foundation enables:
- Budget tracking and recommendations
- Bill payment reminders
- Investment portfolio analysis
- Savings goal tracking
- Expense report generation
- Financial forecasting
- Multi-user financial advisory platforms

## Getting Started

The server requires:
1. Plaid API credentials (free sandbox account available)
2. Node.js environment
3. MCP-compatible client (Claude Desktop, Cursor, etc.)

Once configured, AI assistants can immediately begin answering financial questions using the user's real or sandbox financial data.

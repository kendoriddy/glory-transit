# AI Chatbot Setup Guide

This guide will help you set up the AI chatbot for your portfolio. The chatbot can answer questions about you, your portfolio, projects, skills, and more!

## 📋 Overview

The chatbot uses one of several AI providers to answer visitor questions. You can choose from:

1. **OpenAI GPT-3.5-turbo** (Recommended) - Very cheap (~$0.002 per 1K tokens)
2. **Google Gemini** - Free tier available
3. **Hugging Face Inference** - Free for smaller models

## 🚀 Quick Setup (OpenAI - Recommended)

### Step 1: Get an OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to [API Keys](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy the key (you'll only see it once!)

### Step 2: Add API Key to Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist):

```bash
OPENAI_API_KEY=sk-your-api-key-here
AI_PROVIDER=openai
```

### Step 3: Update Your Portfolio Information

Edit `lib/portfolio-knowledge.ts` with your actual information:
- Personal bio
- Skills and proficiency levels
- Projects and descriptions
- Technologies you use
- Interests and hobbies

### Step 4: Test It Out!

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your portfolio in the browser
3. Click the floating chatbot button (bottom-right)
4. Ask questions like:
   - "What skills do you have?"
   - "Tell me about your projects"
   - "What technologies do you use?"
   - "What are you learning?"

## 💰 Cost Estimation (OpenAI)

- **GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **Average conversation**: ~500-1000 tokens
- **Cost per conversation**: ~$0.001-0.002 (less than a cent!)
- **1000 conversations/month**: ~$1-2
- **10,000 conversations/month**: ~$10-20

**Note**: OpenAI offers $5 free credit for new accounts, which is enough for thousands of conversations!

## 🔄 Alternative Providers

### Option 2: Google Gemini (Free Tier Available)

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add to `.env.local`:
   ```bash
   GEMINI_API_KEY=your-gemini-api-key
   AI_PROVIDER=gemini
   ```

**Pricing**: Free tier includes generous monthly limits. Check current pricing at [Google AI Studio](https://makersuite.google.com/app/apikey).

### Option 3: Hugging Face (Free)

1. Get API key from [Hugging Face](https://huggingface.co/settings/tokens)
2. Add to `.env.local`:
   ```bash
   HUGGING_FACE_API_KEY=your-hf-token
   HUGGING_FACE_MODEL=microsoft/DialoGPT-medium
   AI_PROVIDER=huggingface
   ```

**Pricing**: Free for many models, but may have rate limits. Some models require paid inference.

**Note**: Hugging Face models may be slower and less conversational than GPT-3.5 or Gemini.

## 🔒 Security Best Practices

1. **Never commit `.env.local` to git** - It's already in `.gitignore`
2. **Rotate API keys** if they're exposed
3. **Set usage limits** in your AI provider's dashboard
4. **Monitor usage** regularly to avoid unexpected costs
5. **Use environment variables** only (never hardcode keys)

## 🎨 Customization

### Change Chatbot Appearance

Edit `components/ui/Chatbot.tsx` to customize:
- Colors and styling
- Button position
- Window size
- Welcome message
- Animation timing

### Improve Responses

1. **Update knowledge base**: Edit `lib/portfolio-knowledge.ts` with more detailed information
2. **Adjust system prompt**: Modify the system message in `app/api/chat/route.ts`
3. **Change model parameters**: Adjust `temperature` and `max_tokens` in the API route

### Example Customizations

**Change button position** (in `Chatbot.tsx`):
```tsx
// Change from bottom-right to bottom-left
className="fixed bottom-8 left-8 z-50 ..."
```

**Change welcome message**:
```tsx
const [messages, setMessages] = useState<Message[]>([
  {
    role: "assistant",
    content: "Hi! I'm here to help. Ask me anything about my work!",
  },
]);
```

**Adjust response style** (in `route.ts`):
```tsx
content: `You are a friendly assistant...` // Change tone/style here
```

## 🐛 Troubleshooting

### Chatbot doesn't respond

1. **Check API key**: Make sure it's correct in `.env.local`
2. **Check provider**: Verify `AI_PROVIDER` matches your API key
3. **Check console**: Look for errors in browser console and terminal
4. **Restart dev server**: After changing `.env.local`, restart `npm run dev`

### Error: "API_KEY is not set"

- Make sure `.env.local` exists in project root
- Verify the variable name matches exactly (e.g., `OPENAI_API_KEY`)
- Restart your development server after adding env variables

### Responses are slow

- **Hugging Face**: Can be slower, especially on free tier
- **Network**: Check your internet connection
- **Rate limits**: Some providers have rate limits that can cause delays

### Responses are inaccurate

1. **Update knowledge base**: Add more information to `lib/portfolio-knowledge.ts`
2. **Improve system prompt**: Make it more specific in `app/api/chat/route.ts`
3. **Try different model**: Switch providers or upgrade to a better model

## 📊 Monitoring Usage

### OpenAI
- Dashboard: [OpenAI Usage](https://platform.openai.com/usage)
- Set limits: [OpenAI Limits](https://platform.openai.com/account/billing/limits)

### Google Gemini
- Dashboard: [Google Cloud Console](https://console.cloud.google.com/)

### Hugging Face
- Dashboard: [Hugging Face Settings](https://huggingface.co/settings/billing)

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `OPENAI_API_KEY` (or your chosen provider's key)
   - Add `AI_PROVIDER=openai` (or your chosen provider)
4. Redeploy

### Other Platforms

Add environment variables in your hosting platform's settings:
- Netlify: Site Settings → Environment Variables
- Railway: Project Settings → Variables
- AWS/Google Cloud: Use their respective secret management

## 📝 Example Questions to Test

- "What skills do you have?"
- "Tell me about your projects"
- "What programming languages do you know?"
- "What are you learning?"
- "What technologies does this portfolio use?"
- "Tell me about your AI/ML learning journey"
- "What can you tell me about yourself?"

## 🎯 Next Steps

1. ✅ Get API key from your chosen provider
2. ✅ Add to `.env.local`
3. ✅ Update `lib/portfolio-knowledge.ts` with your info
4. ✅ Test the chatbot
5. ✅ Customize appearance and responses
6. ✅ Deploy and monitor usage

## 💡 Tips

- Start with OpenAI GPT-3.5-turbo - it's the cheapest and most reliable
- Use the free $5 OpenAI credit to test
- Add detailed information to the knowledge base for better responses
- Monitor usage regularly to avoid surprises
- Consider rate limiting if you expect high traffic

## 🤝 Support

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal/server logs
3. Verify your API key is valid
4. Test the API directly using curl or Postman
5. Check provider status pages

---

**Enjoy your AI-powered portfolio chatbot! 🎉**


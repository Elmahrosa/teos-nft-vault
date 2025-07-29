use anchor_lang::prelude::*;

#[program]
pub mod teos_nft_vault {
    use super::*;

    pub fn mint_pharaoh_nft(ctx: Context<MintNFT>, metadata_uri: String) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct MintNFT<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}

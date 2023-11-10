CREATE TABLE [dbo].[Products] (
    [ID]          INT             IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (50)   NULL,
    [Price]       DECIMAL (18, 2) NOT NULL,
    [Description] NVARCHAR (500)  NULL,
    [CategoryID]  INT             NULL,
    CONSTRAINT [PK_dbo.Products] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_dbo.Products_dbo.Categories_CategoryID] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([ID])
);


GO
CREATE NONCLUSTERED INDEX [IX_CategoryID]
    ON [dbo].[Products]([CategoryID] ASC);


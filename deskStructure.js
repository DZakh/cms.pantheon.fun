import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Pictures').child(S.documentTypeList('picture').title('Pictures')),
      S.listItem()
        .title('References')
        .child(S.editor().schemaType('references').documentId('references')),
      S.listItem()
        .title('Privacy policy')
        .child(S.editor().schemaType('privacyPolicy').documentId('privacyPolicy')),
      S.divider(),
      S.listItem()
        .title('Landing')
        .child(
          S.list()
            .title('Sections')
            .items([
              S.listItem()
                .title('Main section')
                .child(S.editor().schemaType('mainSection').documentId('mainSection')),
              S.listItem()
                .title('About us')
                .child(S.editor().schemaType('aboutUsSection').documentId('aboutUsSection')),
              S.listItem()
                .title('Games')
                .child(S.editor().schemaType('gamesSection').documentId('gamesSection')),
              S.listItem()
                .title('Gallery')
                .child(S.editor().schemaType('gallerySection').documentId('gallerySection')),
              S.listItem()
                .title('FaQ')
                .child(S.editor().schemaType('faqSection').documentId('faqSection')),
              S.listItem()
                .title('Price pluses')
                .child(S.editor().schemaType('priceSection').documentId('priceSection')),
              S.listItem()
                .title('Price list')
                .child(S.editor().schemaType('priceListSection').documentId('priceListSection')),
            ])
        ),
    ]);

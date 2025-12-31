---
title: Home
slug: /
sections:
  - type: GenericSection
    badge:
      label: SyncHaul
      color: text-primary
      type: Badge
    title:
      text: Trucking coordination that keeps freight moving—without the chaos.
      color: text-dark
      type: TitleBlock
    subtitle: Reliable truckload execution across the USA
    text: |-
      SyncHaul helps brokers, shippers, and carriers run smoother truckload moves across the USA with real-time updates,
      appointment support, and proactive exception management.

      - Faster coverage on tough lanes  
      - Live tracking + consistent check calls  
      - Appointment scheduling + pickup/delivery coordination  
      - Clear paperwork flow (RC, BOL, POD)
    actions:
      - label: Request a Quote
        url: /contact
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
      - label: Talk to a Specialist
        url: /contact
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Link
    media:
      url: /images/main-hero.svg
      altText: SyncHaul trucking coordination
      type: ImageBlock
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16

  - type: GenericSection
    title:
      text: Built for teams that need speed + consistency.
      color: text-dark
      type: TitleBlock
    text: |-
      **Built for:** Brokers • Shippers • Owner-Operators • Small Fleets  
      **Coverage:** Nationwide USA (all states)
    colors: bg-neutral-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
        padding:
          - pt-10
          - pb-10
          - pl-16
          - pr-16

  - type: FeaturedItemsSection
    title:
      text: Services
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: What SyncHaul can handle for you
    items:
      - type: FeaturedItem
        title: Truckload Coordination
        subtitle: Tender → POD execution
        text: End-to-end coordination from tender to POD—appointments, check calls, and status updates.
        image:
          url: /images/icon1.svg
          altText: Truckload coordination icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large

      - type: FeaturedItem
        title: Carrier Sourcing & Capacity Support
        subtitle: Help when lanes get tight
        text: Support finding dependable capacity and keeping coverage reliable on tough markets.
        image:
          url: /images/icon2.svg
          altText: Capacity support icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large

      - type: FeaturedItem
        title: Live Tracking & Exception Management
        subtitle: Proactive visibility
        text: Real-time tracking, early delay prevention, and fast issue escalation when something changes.
        image:
          url: /images/icon3.svg
          altText: Tracking icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large

      - type: FeaturedItem
        title: Paperwork & Closeout Support
        subtitle: RC • BOL • POD
        text: Organized paperwork flow, missing-doc follow-ups, and clean closeouts for faster billing.
        image:
          url: /images/icon1.svg
          altText: Paperwork icon
          type: ImageBlock
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
    actions:
      - label: Request a Quote
        url: /contact
        style: primary
        type: Button
        showIcon: false
        icon: arrowRight
        iconPosition: right
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pl-16, pb-16, pr-16]
        justifyContent: center
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    title:
      text: How SyncHaul Works
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Simple, repeatable, road-realistic execution
    items:
      - type: FeaturedItem
        title: 1) Share the load details
        subtitle: Lane + windows + equipment
        text: Lane, pickup/delivery windows, equipment, rate, and special notes.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large

      - type: FeaturedItem
        title: 2) We coordinate the move
        subtitle: Appointments + tracking
        text: Appointments, driver communication, tracking, and updates you can forward to customers.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large

      - type: FeaturedItem
        title: 3) Clean closeout
        subtitle: POD collected
        text: POD collected, exceptions documented, and final status confirmed.
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-16, pl]()

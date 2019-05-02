Feature: Webpage

  I want to open my webpage and verify some infos

  @focus
  Scenario: Opening my webpage
    Given I open my webpage
    Then I see "Adelino P Mazuti" in the title

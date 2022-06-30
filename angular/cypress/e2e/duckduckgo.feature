# cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com
    Scenario: visting the frontpage
        Given I test a custom command
        When I visit duckduckgo.com
        Then I should see a search bar
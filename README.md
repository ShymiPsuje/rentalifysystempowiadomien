# Notification Explorer

Panel zarządzania systemem powiadomień Rentalify. Aplikacja umożliwia przeglądanie i analizę wszystkich typów powiadomień w systemie.

## Funkcje

- Przeglądanie wszystkich typów powiadomień (email, SMS, web, chat)
- Filtrowanie po kategoriach i odbiorcach
- Wyszukiwanie w treści powiadomień
- Szczegółowy podgląd treści i metadanych powiadomień
- Wizualizacja przepływu modyfikacji sprzętu

## Technologie

- React 18
- Tailwind CSS
- Shadcn/ui components
- Lucide Icons

## Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/yourusername/notification-explorer.git

# Instalacja zależności
cd notification-explorer
npm install

# Uruchomienie w trybie developerskim
npm run dev
```

## Struktura projektu

- `/src/components` - Komponenty React
- `/src/data` - Dane powiadomień
- `/src/styles` - Style globalne
- `/public` - Zasoby statyczne

## Użytkowanie

1. Filtrowanie powiadomień:
   - Wybór kategorii z rozwijanej listy
   - Wybór odbiorcy (Właściciel/Najemca/Wszyscy)
   - Wyszukiwanie po treści

2. Przeglądanie szczegółów:
   - Kliknij ikonę rozwinięcia by zobaczyć pełne treści
   - Zobacz metadane techniczne
   - Sprawdź aktywne kanały powiadomień
